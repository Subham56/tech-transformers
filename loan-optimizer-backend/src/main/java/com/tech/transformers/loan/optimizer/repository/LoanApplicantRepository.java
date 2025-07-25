package com.tech.transformers.loan.optimizer.repository;

import com.tech.transformers.loan.optimizer.model.LoanApplicant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanApplicantRepository extends JpaRepository<LoanApplicant, Long> {
}
