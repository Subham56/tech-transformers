package com.tech.transformers.loan.optimizer.service;

import com.tech.transformers.loan.optimizer.model.LoanApplicant;
import com.tech.transformers.loan.optimizer.repository.LoanApplicantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicantService {

    @Autowired
    private LoanApplicantRepository loanApplicantRepository;

    public LoanApplicant saveApplicant(LoanApplicant loanApplicant){
        LoanApplicant applicant = loanApplicantRepository.save(loanApplicant);
        System.out.println("LoanApplicant saved with id: " + applicant.getApplicantId());
        return applicant;
    }
}
