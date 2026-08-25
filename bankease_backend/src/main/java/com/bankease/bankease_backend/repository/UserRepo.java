package com.bankease.bankease_backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bankease.bankease_backend.entity.User;

public interface UserRepo extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
