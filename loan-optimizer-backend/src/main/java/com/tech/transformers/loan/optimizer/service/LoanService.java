package com.tech.transformers.loan.optimizer.service;

import com.tech.transformers.loan.optimizer.constants.Constants;
import com.tech.transformers.loan.optimizer.enums.LoanProductType;
import com.tech.transformers.loan.optimizer.model.LoanApplicant;
import com.tech.transformers.loan.optimizer.model.LoanOptions;
import com.tech.transformers.loan.optimizer.model.LoanProduct;
import com.tech.transformers.loan.optimizer.model.Loans;
import com.tech.transformers.loan.optimizer.repository.LoanApplicantRepository;
import com.tech.transformers.loan.optimizer.repository.LoanProductRepository;
import com.tech.transformers.loan.optimizer.util.LoanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class LoanService {

    @Autowired
    private LoanProductRepository loanProductRepository;

    @Autowired
    private LoanApplicantRepository loanApplicantRepository;

    public List<Loans> getAllLoanOptions(LoanApplicant applicant) {
        List<Loans> loansList = new ArrayList<>();
        BigDecimal eligibleEmi = LoanUtils.getEligibleEmiValue(applicant.getAnnualIncome(), applicant.getExistingEmi()); // 100 - 30

        if (LoanUtils.isGreaterThan(eligibleEmi, BigDecimal.ZERO)) {
            List<LoanProduct> products = loanProductRepository.findAll();

            for (LoanProduct product : products) {
                LoanProductType productType = product.getLoanProductType();
                if (productType.equals(LoanProductType.HomeLoan)) {
                    loansList.add(getAllHomeLoanOptions(applicant));
                }
                if (productType.equals(LoanProductType.PersonalLoan)) {
                    loansList.add(getAllPersonalLoanOptions(applicant));
                }
                if (productType.equals(LoanProductType.CarLoan)) {
                    loansList.add(getAllCarLoanOptions(applicant));
                }
                if (productType.equals(LoanProductType.EducationLoan)) {
                    loansList.add(getAllEducationLoanOptions(applicant));
                }
                if (productType.equals(LoanProductType.BusinessLoan)) {
                    loansList.add(getAllBusinessLoanOptions(applicant));
                }
                if (productType.equals(LoanProductType.CreditCardLoan)) {
                    loansList.add(getAllCreditCardLoanOptions(applicant));
                }
                if (productType.equals(LoanProductType.GoldLoan)) {
                    loansList.add(getAllGoldLoanOptions(applicant));
                }
            }
        }
        return loansList;
    }

    public Loans getAllHomeLoanOptions(LoanApplicant applicant) {
        List<Integer> allTenures = Arrays.asList(new Integer[]{5, 10, 15, 20, 25});

        Loans loans = new Loans();
        loans.setLoanCategory(LoanProductType.HomeLoan);

        LoanProduct product = loanProductRepository.getByLoanProductType(LoanProductType.HomeLoan);
        BigDecimal eligibleEmi = LoanUtils.getEligibleEmiValue(applicant.getAnnualIncome(), applicant.getExistingEmi()); // 100 - 30

        List<LoanOptions> loanOptionsList = new ArrayList<>();
        for (Integer tenure: Constants.HOME_LOAN_TENURES){
            if (LoanUtils.isGreaterThan(eligibleEmi, BigDecimal.ZERO)) {
                loanOptionsList.add(getLoanOption(product, eligibleEmi, tenure));
            }
        }
        loans.setLoanOptions(loanOptionsList);
        return loans;
    }

    public Loans getAllCarLoanOptions(LoanApplicant applicant) {
        Loans loans = new Loans();
        loans.setLoanCategory(LoanProductType.CarLoan);

        LoanProduct product = loanProductRepository.getByLoanProductType(LoanProductType.CarLoan);
        BigDecimal eligibleEmi = LoanUtils.getEligibleEmiValue(applicant.getAnnualIncome(), applicant.getExistingEmi()); // 100 - 30

        List<LoanOptions> loanOptionsList = new ArrayList<>();
        for (Integer tenure: Constants.CAR_LOAN_TENURES){
            if (LoanUtils.isGreaterThan(eligibleEmi, BigDecimal.ZERO)) {
                loanOptionsList.add(getLoanOption(product, eligibleEmi, tenure));
            }
        }
        loans.setLoanOptions(loanOptionsList);
        return loans;
    }

    public Loans getAllPersonalLoanOptions(LoanApplicant applicant) {
        Loans loans = new Loans();
        loans.setLoanCategory(LoanProductType.PersonalLoan);

        LoanProduct product = loanProductRepository.getByLoanProductType(LoanProductType.PersonalLoan);
        BigDecimal eligibleEmi = LoanUtils.getEligibleEmiValue(applicant.getAnnualIncome(), applicant.getExistingEmi()); // 100 - 30


        List<LoanOptions> loanOptionsList = new ArrayList<>();
        for (Integer tenure: Constants.PERSONAL_LOAN_TENURES){
            if (LoanUtils.isGreaterThan(eligibleEmi, BigDecimal.ZERO)) {
                loanOptionsList.add(getLoanOption(product, eligibleEmi, tenure));
            }
        }
        loans.setLoanOptions(loanOptionsList);
        return loans;
    }

    public Loans getAllEducationLoanOptions(LoanApplicant applicant) {
        Loans loans = new Loans();
        loans.setLoanCategory(LoanProductType.EducationLoan);

        LoanProduct product = loanProductRepository.getByLoanProductType(LoanProductType.EducationLoan);
        BigDecimal eligibleEmi = LoanUtils.getEligibleEmiValue(applicant.getAnnualIncome(), applicant.getExistingEmi()); // 100 - 30

        List<LoanOptions> loanOptionsList = new ArrayList<>();
        for (Integer tenure: Constants.EDUCATION_LOAN_TENURES){
            if (LoanUtils.isGreaterThan(eligibleEmi, BigDecimal.ZERO)) {
                loanOptionsList.add(getLoanOption(product, eligibleEmi, tenure));
            }
        }
        loans.setLoanOptions(loanOptionsList);
        return loans;
    }

    public Loans getAllBusinessLoanOptions(LoanApplicant applicant) {
        Loans loans = new Loans();
        loans.setLoanCategory(LoanProductType.BusinessLoan);

        LoanProduct product = loanProductRepository.getByLoanProductType(LoanProductType.BusinessLoan);
        BigDecimal eligibleEmi = LoanUtils.getEligibleEmiValue(applicant.getAnnualIncome(), applicant.getExistingEmi()); // 100 - 30

        List<LoanOptions> loanOptionsList = new ArrayList<>();
        for (Integer tenure: Constants.BUSINESS_LOAN_TENURES){
            if (LoanUtils.isGreaterThan(eligibleEmi, BigDecimal.ZERO)) {
                loanOptionsList.add(getLoanOption(product, eligibleEmi, tenure));
            }
        }
        loans.setLoanOptions(loanOptionsList);
        return loans;
    }

    public Loans getAllCreditCardLoanOptions(LoanApplicant applicant) {
        Loans loans = new Loans();
        loans.setLoanCategory(LoanProductType.CreditCardLoan);

        LoanProduct product = loanProductRepository.getByLoanProductType(LoanProductType.CreditCardLoan);
        BigDecimal eligibleEmi = LoanUtils.getEligibleEmiValue(applicant.getAnnualIncome(), applicant.getExistingEmi()); // 100 - 30

        List<LoanOptions> loanOptionsList = new ArrayList<>();
        for (Integer tenure: Constants.CREDIT_CARD_LOAN_TENURES){
            if (LoanUtils.isGreaterThan(eligibleEmi, BigDecimal.ZERO)) {
                loanOptionsList.add(getLoanOption(product, eligibleEmi, tenure));
            }
        }
        loans.setLoanOptions(loanOptionsList);
        return loans;
    }

    public Loans getAllGoldLoanOptions(LoanApplicant applicant) {
        Loans loans = new Loans();
        loans.setLoanCategory(LoanProductType.GoldLoan);

        LoanProduct product = loanProductRepository.getByLoanProductType(LoanProductType.GoldLoan);
        BigDecimal eligibleEmi = LoanUtils.getEligibleEmiValue(applicant.getAnnualIncome(), applicant.getExistingEmi()); // 100 - 30

        List<LoanOptions> loanOptionsList = new ArrayList<>();
        for (Integer tenure: Constants.GOLD_LOAN_TENURES){
            if (LoanUtils.isGreaterThan(eligibleEmi, BigDecimal.ZERO)) {
                loanOptionsList.add(getLoanOption(product, eligibleEmi, tenure));
            }
        }
        loans.setLoanOptions(loanOptionsList);
        return loans;
    }

    public LoanOptions getLoanOption(LoanProduct product, BigDecimal emiValue, Integer tenure) {
        LoanOptions loanOptions = new LoanOptions();
        loanOptions.setLoanType(product.getLoanProductType());
        loanOptions.setPrepaymentAllowed(product.getPrepaymentAllowed());
        loanOptions.setCollateralRequired(product.getCollateralRequired());
        loanOptions.setRateOfInterest(product.getRateOfInterest());
        loanOptions.setLoanEmi(emiValue);
        loanOptions.setProcessingFee(product.getProcessingFee());
        loanOptions.setLateEmiPenaltyFine(LoanUtils.divideInRoundingMode(emiValue, Constants.HUNDRED).multiply(product.getPenaltyRate()));
        loanOptions.setTenureInYears(tenure);
        loanOptions.setCreditScoreRequired(product.getCreditScoreRequired());
        loanOptions.setLoanDisbursalInDays(product.getLoanDisbursalInDays());
        loanOptions.setRemarks(product.getRemarks());
        loanOptions.setLoanAmount(LoanUtils.calculateLoanAmount(product, loanOptions));
        loanOptions.setTotalPaid(emiValue.multiply(Constants.TWELVE.multiply(BigDecimal.valueOf(tenure))));
        loanOptions.setTotalInterestPaid(loanOptions.getTotalPaid().subtract(loanOptions.getLoanAmount()));
        return loanOptions;
    }
}
