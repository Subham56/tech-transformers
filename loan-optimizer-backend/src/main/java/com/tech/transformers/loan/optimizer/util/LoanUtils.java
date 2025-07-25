package com.tech.transformers.loan.optimizer.util;

import com.tech.transformers.loan.optimizer.constants.Constants;
import com.tech.transformers.loan.optimizer.model.LoanOptions;
import com.tech.transformers.loan.optimizer.model.LoanProduct;
import lombok.experimental.UtilityClass;

import java.math.BigDecimal;
import java.math.RoundingMode;

@UtilityClass
public class LoanUtils {
    public static Boolean isGreaterThan(BigDecimal val1, BigDecimal val2){
        return val1.compareTo(val2)>0;
    }


    public static BigDecimal getEligibleEmiValue(BigDecimal annualIncome, BigDecimal existingEmi){
        BigDecimal possibleEmi = LoanUtils.isGreaterThan(annualIncome, BigDecimal.ZERO)
                ? divideInRoundingMode(annualIncome, Constants.TWENTY_FOUR) : BigDecimal.ZERO; // (50% of Monthly In hand Salary)

        return possibleEmi.subtract(existingEmi); // 100 - 30
    }

    public static BigDecimal divideInRoundingMode(BigDecimal value, BigDecimal divisor) {
        return value.divide(divisor, 2, RoundingMode.HALF_UP);
    }

    public static BigDecimal calculateLoanAmount(LoanProduct product, LoanOptions loanOptions) {
        BigDecimal monthlyRoi = LoanUtils.divideInRoundingMode(LoanUtils.divideInRoundingMode(product.getRateOfInterest(), Constants.TWELVE), Constants.HUNDRED);
        BigDecimal instalments = Constants.TWELVE.multiply(BigDecimal.valueOf(loanOptions.getTenureInYears()));
        BigDecimal calRoiVal1 = BigDecimal.ONE.add(monthlyRoi).pow(instalments.intValue()).subtract(BigDecimal.ONE);
        BigDecimal calRoiVal2 = monthlyRoi.multiply(BigDecimal.ONE.add(monthlyRoi).pow(instalments.intValue()));
        return loanOptions.getLoanEmi().multiply(LoanUtils.divideInRoundingMode(calRoiVal1, calRoiVal2));
    }
}
