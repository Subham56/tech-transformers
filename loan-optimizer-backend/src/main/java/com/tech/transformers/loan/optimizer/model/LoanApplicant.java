package com.tech.transformers.loan.optimizer.model;

import com.tech.transformers.loan.optimizer.enums.EmploymentStatus;
import com.tech.transformers.loan.optimizer.enums.Gender;
import com.tech.transformers.loan.optimizer.enums.LoanProductType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "loan_applicant")
public class LoanApplicant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicantId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private Gender gender;

    @Column(name = "pan")
    private String pan;

    @Column(name = "aadhar_number")
    private String aadharNumber;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email_address")
    private String emailAddress;

    @Lob
    @Column(name = "address")
    private String address;

    @Column(name = "pin_code")
    private String pinCode;

    @Enumerated(EnumType.STRING)
    @Column(name = "employment_status")
    private EmploymentStatus employmentStatus;

    @Column(name = "employer_or_business")
    private String employerOrBusiness;

    @Column(name = "annual_income")
    private BigDecimal annualIncome;

    @Column(name = "loan_purpose")
    private String loanPurpose;

    @Column(name = "enquiry_date")
    private LocalDate enquiryDate;

    @Column(name = "cibil_verification_consent")
    private Boolean cibilVerificationConsent;

    @Column(name = "existing_emi")
    private BigDecimal existingEmi;

    @Column(name = "loan_plan")
    private LoanProductType loanPlan;

}

