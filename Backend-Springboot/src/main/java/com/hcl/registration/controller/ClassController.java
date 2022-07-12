package com.hcl.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hcl.registration.exception.ResourceNotFoundException;
import com.hcl.registration.model.Class;
import com.hcl.registration.repository.ClassRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ClassController {

    @Autowired
    private ClassRepository classRepository;

    @GetMapping("/classes")
    public List<Class> getAllClasses(){
        return this.classRepository.findAll();
    }

    @GetMapping("/classes/{id}")
    public ResponseEntity<Class> getClassById(@PathVariable Long id){
    	Class class1 = classRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Class with id '"+id+"' does not exist"));
        return ResponseEntity.ok(class1);
    }

    @PostMapping("/classes")
    public Class createClass(@RequestBody Class class1){
        return classRepository.save(class1);
    }

    @PutMapping("/classes/{id}")
    public ResponseEntity<Class> updateClass (@PathVariable Long id, @RequestBody Class classInfo) {

    	Class class1 = classRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Class with id '" + id + "' does not exist"));

    	class1.setClassTeacher(classInfo.getClassTeacher());
    	class1.setId(classInfo.getId());
    	class1.setClassNo(classInfo.getClassNo());
    	class1.setPeriods(classInfo.getPeriods());
    	class1.setStrength(classInfo.getStrength());
    

        
        Class updatedClass = classRepository.save(class1);
        return ResponseEntity.ok(updatedClass);
    }

    // todo: validate
    @DeleteMapping("/classes/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteClass(@PathVariable Long id){
        Class class1 = classRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Class with id '" + id + "' does not exist"));

        classRepository.delete(class1);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

}