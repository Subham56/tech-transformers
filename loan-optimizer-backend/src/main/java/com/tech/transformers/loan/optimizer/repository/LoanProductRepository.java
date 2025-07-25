package com.tech.transformers.loan.optimizer.repository;

import com.tech.transformers.loan.optimizer.enums.LoanProductType;
import com.tech.transformers.loan.optimizer.model.LoanProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanProductRepository extends JpaRepository<LoanProduct, Long> {
    LoanProduct getByLoanProductType(LoanProductType loanProductType);
}
