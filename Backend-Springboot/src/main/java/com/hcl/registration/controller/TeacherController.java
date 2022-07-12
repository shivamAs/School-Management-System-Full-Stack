package com.hcl.registration.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hcl.registration.exception.ResourceNotFoundException;
import com.hcl.registration.model.Teacher;
import com.hcl.registration.repository.TeacherRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class TeacherController {

    @Autowired
    private TeacherRepository teacherRepository;

    @GetMapping("/teachers")
    public List<Teacher> getAllTeachers(){
        return this.teacherRepository.findAll();
    }

    @GetMapping("/teachers/{id}")
    public ResponseEntity<Teacher> getStudentById(@PathVariable Long id){
    	Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Teacher with id '"+id+"' does not exist"));
        return ResponseEntity.ok(teacher);
    }

    @PostMapping("/teachers")
    public Teacher createTeacher(@RequestBody Teacher teacher){
        return teacherRepository.save(teacher);
    }

    @PutMapping("/teachers/{id}")
    public ResponseEntity<Teacher> updateteacher (@PathVariable Long id, @RequestBody Teacher teacherInfo) {

    	Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Teacher with id '" + id + "' does not exist"));

        teacher.setId(teacherInfo.getId());
        teacher.setName(teacherInfo.getName());
        teacher.setClassNo(teacherInfo.getClassNo());
        teacher.setSubject(teacherInfo.getSubject());
        teacher.setAge(teacherInfo.getAge());
        teacher.setAddress(teacherInfo.getAddress());
        teacher.setPhoneNo(teacherInfo.getPhoneNo());
        
    	Teacher updatedTeacher = teacherRepository.save(teacher);
        return ResponseEntity.ok(updatedTeacher);
    }

    // todo: validate
    @DeleteMapping("/teachers/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTeacher(@PathVariable Long id){
    	Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Teacher with id '" + id + "' does not exist"));

        teacherRepository.delete(teacher);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

}


