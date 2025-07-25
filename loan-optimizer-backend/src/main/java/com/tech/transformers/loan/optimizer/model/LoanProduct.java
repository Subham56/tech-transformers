package com.tech.transformers.loan.optimizer.model;

import com.tech.transformers.loan.optimizer.enums.LoanProductType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "loan_product")
public class LoanProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long loanProductId;

    @Enumerated(EnumType.STRING)
    @Column(name = "loan_product_type")
    private LoanProductType loanProductType;

    @Column(name = "rate_of_interest")
    private BigDecimal rateOfInterest;

    @Column(name = "max_tenure_in_years")
    private Integer maxTenureInYears;

    @Column(name = "min_tenure_in_years")
    private Integer minTenureInYears;

    @Column(name = "processing_fee")
    private BigDecimal processingFee;

    @Column(name = "penalty_rate")
    private BigDecimal penaltyRate;

    @Column(name = "prepayment_allowed")
    private Boolean prepaymentAllowed;

    @Column(name = "collateral_required")
    private Boolean collateralRequired;

    @Column(name = "credit_score_required")
    private Integer creditScoreRequired;

    @Column(name = "loan_disbursal_in_days")
    private Integer loanDisbursalInDays;

    @Lob
    @Column(name = "remarks")
    private String remarks;

}

