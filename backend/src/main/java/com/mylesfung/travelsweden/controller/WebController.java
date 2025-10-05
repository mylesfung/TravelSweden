package com.mylesfung.travelsweden.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

// WebController: ensures frontend routes are handled by
// React SPA instead of Spring (returns 404 bc no defined custom route).
// index.html will render React app and all its routes
@Controller
public class WebController {
    @RequestMapping(value = {
            "/",
            "/client/**",
            "/common/**"
    })
    public String redirect(HttpServletRequest request) {
        // Serve static assets normally
        String path = request.getRequestURI();
        if (path.contains(".") || path.startsWith("/api/")) {
            return null;
        }
        // Serve SPA routes to index.html
        return "forward:/index.html";
    }
}



