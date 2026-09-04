package com.bankease.bankease_backend.security;

import org.springframework.security.authentication.AbstractAuthenticationToken;

import java.util.Collections;

public class JwtAuthenticationToken extends AbstractAuthenticationToken {

    private final String email;

    public JwtAuthenticationToken(String email) {
        super(Collections.emptyList());
        this.email = email;
        setAuthenticated(true);
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    @Override
    public Object getPrincipal() {
        return email;
    }
}