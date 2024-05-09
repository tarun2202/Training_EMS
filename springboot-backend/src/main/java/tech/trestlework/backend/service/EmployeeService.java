package tech.trestlework.backend.service;



import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import tech.trestlework.backend.dto.EmployeeDto;

import java.util.List;


public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long id);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);

    void deleteEmployeeById(Long employeeId);

   // Page<EmployeeDto> getAllEmployees(Pageable pageable);

//    List<EmployeeDto> findEmployeeWithSorting(String field);
//
//    List<EmployeeDto> findEmployeeWithPagination(int offset, int pageSize);
}
