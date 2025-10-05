package com.mylesfung.travelsweden.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
    @RequestMapping(value = {
            "/",
            "/static/**",
            "/service/**"
    })
    public String redirect() {
        return "forward:/index.html";
    }
}



