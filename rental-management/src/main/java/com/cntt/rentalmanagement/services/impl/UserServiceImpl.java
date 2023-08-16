package com.cntt.rentalmanagement.services.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cntt.rentalmanagement.domain.models.Message;
import com.cntt.rentalmanagement.domain.models.User;
import com.cntt.rentalmanagement.domain.models.DTO.MessageDTO;
import com.cntt.rentalmanagement.exception.ResourceNotFoundException;
import com.cntt.rentalmanagement.repository.UserRepository;
import com.cntt.rentalmanagement.services.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;

	@Autowired
	FileStorageServiceImpl fileStorageServiceImpl;
	
	@Override
	public MessageDTO toMessageDTO(User user, Message message) {
//		String userName = "";
//		String imageUrl = "";
//		String message_text = ""; 
//		if (message.getReceiver().getEmail().equals(user.getEmail())) {
//			userName = message.getSender().getEmail();
//			imageUrl = message.getSender().getEmail();
//		}
//		else {
//			userName = message.getReceiver().getEmail();
//			imageUrl = message.getReceiver().getEmail();
//		}
//		message_text = message.getContent();
//		return new MessageDTO(userName, imageUrl, message_text);
		return null;
	}
	@Override
	public String updateImageUser(Long id, String image) {
		try {
			User user = userRepository.findById(id)
	                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
			user.setImageUrl(image);
			userRepository.save(user);
			
			return "Cập nhật hình ảnh thành công!!!";
		} catch (Exception e) {
			return "Cập nhật hình ảnh thất bại!!!";
		}
	}
	
	@Override
	public String updateUser(User user) {
		try {
			User userCore = userRepository.findById(user.getId()).get();
			if (user.getAddress() != null) userCore.setAddress(user.getAddress());
			if (user.getName() != null) userCore.setName(user.getName());
			if (user.getPhone() != null) userCore.setPhone(user.getPhone());
			userRepository.save(userCore);
			return "Cập nhật thông tin thành công!!!";
		} catch (Exception e) {
			return "Cập nhật thông tin thất bại!!!";
		}
	}
	
	@Override
	public List<MessageDTO> getMessageUser(Long id){
		try {
			User user = userRepository.findById(id).get();
			List<MessageDTO> result = new ArrayList<>();
			Set <User> chatList = new HashSet<>();
			for (Message message : user.getReceivedMessages()) {
				if(!chatList.contains(message.getSender())){
					chatList.add(message.getSender());
				}
			}
			
			return result;
		} catch (Exception e) {
			return null;
		}
	}

}
