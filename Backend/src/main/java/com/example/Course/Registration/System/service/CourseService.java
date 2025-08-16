package com.example.Course.Registration.System.service;

import com.example.Course.Registration.System.model.Course;
import com.example.Course.Registration.System.model.CourseRegistry;
import com.example.Course.Registration.System.repository.CourseRepo;
import com.example.Course.Registration.System.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    CourseRepo courseRepo;
   public List<Course> availableCourses() {
       return courseRepo.findAll();
    }
    @Autowired
   CourseRepository courseRepository;
    public List<CourseRegistry> enrolledStudents() {
   return courseRepository.findAll();
    }

    public void registerCourse(String name, String emailId, String courseName) {
        CourseRegistry course = new CourseRegistry(name,emailId,courseName);
        courseRepository.save(course);
    }
}
