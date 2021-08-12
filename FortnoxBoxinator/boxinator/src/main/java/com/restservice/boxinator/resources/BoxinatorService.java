package com.restservice.boxinator.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoxinatorService {
	@Autowired
	private BoxRepository boxRepository;
	public Iterable<Box> getBoxes() {
		return boxRepository.findAll();
	}
	public void addBoxes(Box box) {
		boxRepository.save(box);
	}
}