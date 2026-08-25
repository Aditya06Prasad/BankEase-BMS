package com.bankease.bankease_backend.controller;

import com.bankease.bankease_backend.dto.UserRequest;
import com.bankease.bankease_backend.dto.LoginRequest;
import com.bankease.bankease_backend.dto.LoginResponse;
import com.bankease.bankease_backend.entity.User;
import com.bankease.bankease_backend.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class TestController {

    private final UserService userService;

    public TestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/test")
    public String testApi() {
        return "BankEase Backend is Running";
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody UserRequest userdata) {
        return userService.registerUser(userdata);
    }

    @PostMapping("/login")
    public LoginResponse loginUser(@RequestBody LoginRequest userdata) {
        return userService.loginUser(userdata);
    }
}