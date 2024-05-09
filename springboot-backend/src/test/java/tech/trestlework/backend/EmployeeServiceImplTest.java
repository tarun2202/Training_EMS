package tech.trestlework.backend;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tech.trestlework.backend.dto.EmployeeDto;
import tech.trestlework.backend.entity.Employee;
import tech.trestlework.backend.exception.ResourceNotFoundException;
import tech.trestlework.backend.mapper.EmployeeMapper;
import tech.trestlework.backend.repository.EmployeeRepository;
import tech.trestlework.backend.service.EmployeeServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class EmployeeServiceImplTest {

    @Mock
    private EmployeeRepository employeeRepository;

    @InjectMocks
    private EmployeeServiceImpl employeeService;

    @Test
    public void testCreateEmployee() {
        // Create a sample EmployeeDto
        EmployeeDto employeeDto = new EmployeeDto();
        employeeDto.setFirstName("John");
        employeeDto.setLastName("Doe");
        employeeDto.setEmailId("john.doe@example.com");

        // Mock behavior of EmployeeRepository
        when(employeeRepository.save(any(Employee.class))).thenReturn(new Employee());

        // Test the service method
        EmployeeDto createdEmployee = employeeService.createEmployee(employeeDto);

        // Verify that the repository method was called with the correct arguments
        verify(employeeRepository, times(1)).save(any(Employee.class));

        // Add additional assertions if needed
    }

    @Test
    public void testGetEmployeeById() {
        // Mock data
        Long employeeId = 1L;
        Employee employee = new Employee();
        employee.setId(employeeId);
        employee.setFirstName("John");
        employee.setLastName("Doe");
        employee.setEmailId("john.doe@example.com");

        // Mock behavior of EmployeeRepository
        when(employeeRepository.findById(employeeId)).thenReturn(Optional.of(employee));

        // Test the service method
        EmployeeDto foundEmployee = employeeService.getEmployeeById(employeeId);

        // Verify that the repository method was called with the correct arguments
        verify(employeeRepository, times(1)).findById(employeeId);

        // Add additional assertions if needed
    }

    // Similarly, write tests for other service methods like getAllEmployees, updateEmployee, deleteEmployeeById
}

