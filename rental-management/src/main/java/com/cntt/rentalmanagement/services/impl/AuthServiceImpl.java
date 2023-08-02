package com.cntt.rentalmanagement.services.impl;

import com.cntt.rentalmanagement.domain.enums.AuthProvider;
import com.cntt.rentalmanagement.domain.enums.RoleName;
import com.cntt.rentalmanagement.domain.models.Role;
import com.cntt.rentalmanagement.domain.models.User;
import com.cntt.rentalmanagement.domain.payload.request.LoginRequest;
import com.cntt.rentalmanagement.domain.payload.request.SignUpRequest;
import com.cntt.rentalmanagement.exception.BadRequestException;
import com.cntt.rentalmanagement.repository.RoleRepository;
import com.cntt.rentalmanagement.repository.UserRepository;
import com.cntt.rentalmanagement.secruity.TokenProvider;
import com.cntt.rentalmanagement.services.AuthService;
import com.cntt.rentalmanagement.services.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import java.net.URI;
import java.util.Collections;

@Service
public class AuthServiceImpl extends BaseService implements AuthService {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenProvider tokenProvider;


    @Override
    public URI registerAccount(SignUpRequest signUpRequest) {
        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new BadRequestException("Email đã được sử dụng!!");
        }

        if (!signUpRequest.getPassword().equals(signUpRequest.getConfirmPassword())) {
            throw new BadRequestException("Mật khẩu không khớp. Vui lòng thử lại.");
        }

        // Creating user's account
        User user = new User();
        User result = null;
        user.setName(signUpRequest.getName());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(signUpRequest.getPassword());
        user.setProvider(AuthProvider.local);
        user.setIsLocked(false);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        if (RoleName.ROLE_USER.equals(signUpRequest.getRole())) {
            Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                    .orElseThrow(() -> new IllegalArgumentException("User Role not set."));

            user.setRoles(Collections.singleton(userRole));
            result = userRepository.save(user);

        } else if(RoleName.ROLE_RENTALER.equals(signUpRequest.getRole())){
            Role userRole = roleRepository.findByName(RoleName.ROLE_RENTALER)
                    .orElseThrow(() -> new IllegalArgumentException("User Role not set."));
            user.setAddress(signUpRequest.getAddress());
            user.setPhone(signUpRequest.getPhone());
            user.setRoles(Collections.singleton(userRole));
            result = userRepository.save(user);
        } else {
            throw new IllegalArgumentException("Bạn không có quyền tạo tài khoản!!!!");
        }

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/user/me")
                .buildAndExpand(result.getId()).toUri();
        return location;
    }

    @Override
    public String login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return tokenProvider.createToken(authentication);
    }
}
