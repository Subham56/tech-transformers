package com.tech.transformers.loan.optimizer.model;

import com.tech.transformers.loan.optimizer.enums.LoanProductType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoanOptions {
    private LoanProductType loanType;
    private Boolean prepaymentAllowed;
    private Boolean collateralRequired;
    private BigDecimal loanAmount;
    private BigDecimal rateOfInterest;
    private BigDecimal loanEmi;
    private BigDecimal totalPaid;
    private BigDecimal totalInterestPaid;
    private BigDecimal processingFee;
    private BigDecimal lateEmiPenaltyFine;
    private Integer tenureInYears;
    private Integer creditScoreRequired;
    private Integer loanDisbursalInDays;
    private String remarks;
}
