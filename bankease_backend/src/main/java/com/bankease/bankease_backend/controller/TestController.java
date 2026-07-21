package com.bankease.bankease_backend.controller;
import com.bankease.bankease_backend.dto.UserRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")

public class TestController {
    @GetMapping("/test")
        public String testApi() {
        return "BankEase Backend is Running";        
    }

    @PostMapping("/register")
        public String registerUser(@RequestBody UserRequest user){
        return "Welcome "+ user.getName();
    }
    
}