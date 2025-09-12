package com.mylesfung.travelsweden.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // CORS: Makes local file uploads available to browser HTTP
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:uploads/");
    }

}
