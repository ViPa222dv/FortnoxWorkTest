package com.boxinator.restservice;

public class BoxinatorApi {

	private final long id;
	private final String content;

	public BoxinatorApi(long id, String content) {
		this.id = id;
		this.content = content;
	}

	public long getId() {
		return id;
	}

	public String getContent() {
		return content;
	}
}