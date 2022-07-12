package com.hcl.registration.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hcl.registration.exception.ResourceNotFoundException;
import com.hcl.registration.model.Student;
import com.hcl.registration.repository.StudentRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return this.studentRepository.findAll();
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id){
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student with id '"+id+"' does not exist"));
        return ResponseEntity.ok(student);
    }

    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student){
        return studentRepository.save(student);
    }

    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent (@PathVariable Long id, @RequestBody Student studentInfo) {

        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student with id '" + id + "' does not exist"));

        student.setAddress(studentInfo.getAddress());
        student.setName(studentInfo.getName());
        student.setClassNo(studentInfo.getClassNo());
        student.setRollNo(studentInfo.getRollNo());
        student.setAge(studentInfo.getAge());
        student.setAddress(studentInfo.getAddress());
        student.setFather(studentInfo.getFather());
        student.setMother(studentInfo.getMother());

        
        Student updatedStudent = studentRepository.save(student);
        return ResponseEntity.ok(updatedStudent);
    }

    // todo: validate
    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id){
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student with id '" + id + "' does not exist"));

        studentRepository.delete(student);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

}