package com.cntt.rentalmanagement.services.impl;

import com.cntt.rentalmanagement.domain.models.User;
import com.cntt.rentalmanagement.domain.payload.request.SendEmailRequest;
import com.cntt.rentalmanagement.domain.payload.response.MessageResponse;
import com.cntt.rentalmanagement.domain.payload.response.UserResponse;
import com.cntt.rentalmanagement.exception.BadRequestException;
import com.cntt.rentalmanagement.repository.UserRepository;
import com.cntt.rentalmanagement.services.AccountService;
import com.cntt.rentalmanagement.utils.MapperUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {
    private final UserRepository userRepository;
    private final MapperUtils mapperUtils;
    private final JavaMailSender mailSender;

    @Override
    public Page<User> getAllAccount(String keyword, Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        return userRepository.searchingAccount(keyword,pageable);
    }

    @Override
    public UserResponse getAccountById(Long id) {
        return mapperUtils.convertToResponse(userRepository.findById(id).orElseThrow(() -> new BadRequestException("Tài khoản không tồn tại")), UserResponse.class);
    }

    @Override
    public MessageResponse sendEmailForRentaler(Long id, SendEmailRequest sendEmailRequest) throws MessagingException, IOException {
        sendEmailFromTemplate(sendEmailRequest);
        return MessageResponse.builder().message("Gửi mail thành công").build();
    }


    public void sendEmailFromTemplate(SendEmailRequest sendEmailRequest) throws MessagingException, IOException {
        MimeMessage message = mailSender.createMimeMessage();

        message.setFrom(new InternetAddress("trungdang82678@gmail.com"));
        message.setRecipients(MimeMessage.RecipientType.TO, sendEmailRequest.getToEmail());
        message.setSubject(sendEmailRequest.getTitle());

        // Read the HTML template into a String variable
        String htmlTemplate = readFile("send-email.html");

        // Replace placeholders in the HTML template with dynamic values
        htmlTemplate = htmlTemplate.replace("NAM NGHIEM", sendEmailRequest.getNameOfRentaler());
        htmlTemplate = htmlTemplate.replace("DESCRIPTION", sendEmailRequest.getDescription());

        // Set the email's content to be the HTML template
        message.setContent(htmlTemplate, "text/html; charset=utf-8");

        mailSender.send(message);
    }

    public static String readFile(String filename) throws IOException {
        File file = ResourceUtils.getFile("classpath:send-email.html");
        byte[] encoded = Files.readAllBytes(file.toPath());
        return new String(encoded, StandardCharsets.UTF_8);
    }
}
