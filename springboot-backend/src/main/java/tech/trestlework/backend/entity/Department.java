package tech.trestlework.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import javax.lang.model.element.Name;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "departments")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "department_name", nullable = false, unique = true)
    private String departmentName;

    @Column(name = "department_description", nullable = false)
    private String departmentDescription;
}
