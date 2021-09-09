package com.patryk.security;

import com.patryk.auth.ApplicationUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;

import static com.patryk.security.ApplicationUserPermission.STUDENT_WRITE;
import static com.patryk.security.ApplicationUserRole.*;

@Configuration
@EnableWebSecurity
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;
    private final ApplicationUserService applicationUserService;

    @Autowired
    public ApplicationSecurityConfig(PasswordEncoder passwordEncoder, ApplicationUserService applicationUserService) {
        this.passwordEncoder = passwordEncoder;
        this.applicationUserService = applicationUserService;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf()
                .and()
                .authorizeRequests()
                .antMatchers("/index", "/css/*", "/js/*").permitAll()
//                Use of Roles only Authentication on Employee App
                .antMatchers("/employee/all", "/employee/find/**").hasAnyRole(empEMPLOYEE.name(), empADMIN.name())
                .antMatchers("/employee/admin/**").hasRole(empADMIN.name())
//                Use of Roles And Permissions/Authorities mixed Authentication on Student App
                .antMatchers(HttpMethod.DELETE, "/management/student/**").hasAuthority(STUDENT_WRITE.getPermission())
                .antMatchers(HttpMethod.POST, "/management/student/**").hasAuthority(STUDENT_WRITE.getPermission())
                .antMatchers(HttpMethod.PUT, "/management/student/**").hasAuthority(STUDENT_WRITE.getPermission())
                .antMatchers(HttpMethod.GET, "/management/student/**").hasAnyRole(stuADMIN.name(), stuSTUDENT.name())
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder);
        provider.setUserDetailsService(applicationUserService);
        return provider;
    }
}
