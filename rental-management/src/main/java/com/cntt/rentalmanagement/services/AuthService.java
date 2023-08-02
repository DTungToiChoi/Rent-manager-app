package com.cntt.rentalmanagement.services;




import com.cntt.rentalmanagement.domain.payload.request.EmailRequest;
import com.cntt.rentalmanagement.domain.payload.request.LoginRequest;
import com.cntt.rentalmanagement.domain.payload.request.ResetPasswordRequest;
import com.cntt.rentalmanagement.domain.payload.request.SignUpRequest;
import com.cntt.rentalmanagement.domain.payload.response.MessageResponse;

import javax.mail.MessagingException;
import java.io.IOException;
import java.net.URI;

public interface AuthService {
    URI registerAccount(SignUpRequest signUpRequest) throws MessagingException, IOException;

    String login(LoginRequest loginRequest);

    MessageResponse forgotPassword(EmailRequest emailRequest) throws MessagingException, IOException;

    MessageResponse resetPassword(ResetPasswordRequest resetPasswordRequest);

    MessageResponse confirmedAccount(EmailRequest emailRequest);
}
