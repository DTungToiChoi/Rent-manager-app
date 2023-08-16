package com.cntt.rentalmanagement.domain.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MessageChat {
	
	@Id
	private Long id;

	private String content;
	
	private Date sentAt;

	@Column(name = "is_read")
	private Boolean read;
	
	@Column(name = "send_by")
	private Boolean sendBy;
	
	@ManyToOne
	private MessageChat message;

}
