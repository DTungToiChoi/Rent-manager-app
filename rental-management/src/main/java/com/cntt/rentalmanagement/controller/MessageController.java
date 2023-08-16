package com.cntt.rentalmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cntt.rentalmanagement.services.impl.MessageServiceImpl;

@RestController
public class MessageController {
	
	@Autowired
	private MessageServiceImpl messageServiceImpl;

	@GetMapping("/send")
	public String testSendMessage() {
		messageServiceImpl.Producer("giangnam.17122002@gmail.com", "giangnam.trunghoccoso@gmail.com");
		messageServiceImpl.Consumer("giangnam.17122002@gmail.com", "giangnam.trunghoccoso@gmail.com");
		return "success";
	}
}
