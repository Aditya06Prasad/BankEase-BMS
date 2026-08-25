package com.bankease.bankease_backend.service;

import com.bankease.bankease_backend.dto.UserRequest;
import com.bankease.bankease_backend.dto.LoginRequest;
import com.bankease.bankease_backend.dto.LoginResponse;
import com.bankease.bankease_backend.entity.User;
import com.bankease.bankease_backend.repository.UserRepo;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepo userdata;
    private final PasswordEncoder passEncode;

    public UserService(UserRepo userdata, PasswordEncoder passEncode) {
        this.userdata = userdata;
        this.passEncode = passEncode;
    }

    public User registerUser(UserRequest userdata) {

        User user = new User();

        user.setName(userdata.getName());
        user.setEmail(userdata.getEmail());

        String hashedPassword = passEncode.encode(userdata.getPassword());
        user.setPassword(hashedPassword);

        User savedUser = this.userdata.save(user);
        return savedUser;
    }

    public LoginResponse loginUser(LoginRequest logindata) {

        User user = this.userdata.findByEmail(logindata.getEmail());

        if (user == null) {
            return null;
        }

        if (!passEncode.matches(logindata.getPassword(), user.getPassword())) {
            return null;
        }

        LoginResponse response = new LoginResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                "Login Successfully"
        );

        return response;
    }
}