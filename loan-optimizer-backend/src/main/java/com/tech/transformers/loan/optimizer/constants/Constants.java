package com.tech.transformers.loan.optimizer.constants;

import lombok.experimental.UtilityClass;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

@UtilityClass
public class Constants {
    public static final BigDecimal TWELVE = new BigDecimal(12);
    public static final BigDecimal TWENTY_FOUR = new BigDecimal(24);
    public static final BigDecimal HUNDRED = new BigDecimal(100);

    public static final List<Integer> HOME_LOAN_TENURES = Arrays.asList(new Integer[]{5, 10, 15, 20, 25});
    public static final List<Integer> CAR_LOAN_TENURES = Arrays.asList(new Integer[]{1, 2, 3, 5, 7});
    public static final List<Integer> PERSONAL_LOAN_TENURES = Arrays.asList(new Integer[]{1, 2, 3, 5});
    public static final List<Integer> EDUCATION_LOAN_TENURES = Arrays.asList(new Integer[]{3, 5, 8, 10});
    public static final List<Integer> BUSINESS_LOAN_TENURES = Arrays.asList(new Integer[]{2, 5, 10, 12});
    public static final List<Integer> GOLD_LOAN_TENURES = Arrays.asList(new Integer[]{1, 2, 3});
    public static final List<Integer> CREDIT_CARD_LOAN_TENURES = Arrays.asList(new Integer[]{1, 2, 3});
}
