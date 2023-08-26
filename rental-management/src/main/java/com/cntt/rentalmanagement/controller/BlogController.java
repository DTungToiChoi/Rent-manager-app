package com.cntt.rentalmanagement.controller;

import com.cntt.rentalmanagement.services.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class BlogController {
    private final BlogService blogService;

    @GetMapping("/room/all")
    private ResponseEntity<?> getAllRoom(@RequestParam(required = false) String title,
                                         @RequestParam(required = false) Boolean approve,
                                         @RequestParam Integer pageNo,
                                         @RequestParam Integer pageSize) {
        return ResponseEntity.ok(blogService.getAllRoomForAdmin(title,approve, pageNo, pageSize));
    }
}
