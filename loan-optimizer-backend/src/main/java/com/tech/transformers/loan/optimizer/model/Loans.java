package com.tech.transformers.loan.optimizer.model;

import com.tech.transformers.loan.optimizer.enums.LoanProductType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Loans {
    private LoanProductType loanCategory;
    private List<LoanOptions> loanOptions;
}
