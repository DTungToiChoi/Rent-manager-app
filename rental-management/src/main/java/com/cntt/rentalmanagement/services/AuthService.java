package com.cntt.rentalmanagement.services;




import com.cntt.rentalmanagement.domain.payload.request.LoginRequest;
import com.cntt.rentalmanagement.domain.payload.request.SignUpRequest;

import java.net.URI;

public interface AuthService {
    URI registerAccount(SignUpRequest signUpRequest);

    String login(LoginRequest loginRequest);
}
