package tech.trestlework.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import tech.trestlework.backend.entity.Employee;

public class EmployeeTest {

    @Test
    public void testEmployeeConstructor() {
        // Create a new employee object
        Employee employee = new Employee(1L, "John", "Doe", "john.doe@example.com");

        // Verify that the fields are set correctly
        assertEquals(1L, employee.getId());
        assertEquals("John", employee.getFirstName());
        assertEquals("Doe", employee.getLastName());
        assertEquals("john.doe@example.com", employee.getEmailId());
    }

    @Test
    public void testEmployeeSetterGetter() {
        // Create a new employee object
        Employee employee = new Employee();

        // Set values using setters
        employee.setId(1L);
        employee.setFirstName("John");
        employee.setLastName("Doe");
        employee.setEmailId("john.doe@example.com");

        // Verify that the getters return the correct values
        assertEquals(1L, employee.getId());
        assertEquals("John", employee.getFirstName());
        assertEquals("Doe", employee.getLastName());
        assertEquals("john.doe@example.com", employee.getEmailId());
    }
}
