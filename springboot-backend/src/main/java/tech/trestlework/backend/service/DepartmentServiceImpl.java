package tech.trestlework.backend.service;

import tech.trestlework.backend.dto.DepartmentDto;
import tech.trestlework.backend.entity.Department;
import tech.trestlework.backend.exception.ResourceNotFoundException;
import tech.trestlework.backend.mapper.DepartmentMapper;
import tech.trestlework.backend.repository.DepartmentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.Collator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepository departmentRepository;
    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(Long departmentId) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(
                        ()->new ResourceNotFoundException("Department doesn't exists with the given department id: "+departmentId)
                );
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
        return departments.stream().map((department)->DepartmentMapper.mapToDepartmentDto(department))
                .collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(Long departmentId, DepartmentDto updatedDepartment) {
        Department department = departmentRepository.findById(departmentId).orElseThrow(
                ()->new ResourceNotFoundException("Department with given id doesn't exists")
        );
        department.setDepartmentName(updatedDepartment.getDepartmentName());
        department.setDepartmentDescription((updatedDepartment.getDepartmentDescription()));

        Department updatedDepartmentObj = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(updatedDepartmentObj);
    }

    @Override
    public void deleteDepartmentById(Long departmentId) {
        departmentRepository.findById(departmentId).orElseThrow(
                ()->new ResourceNotFoundException("Department doesn't exists with the given id: "+departmentId)
        );
        departmentRepository.deleteById(departmentId);
    }

}
