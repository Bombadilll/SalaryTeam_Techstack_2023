const salaries2 = {
    TeamLead: { salary:undefined, tax: "99%" },
    Architect: { salary: 9000, tax: "34%" },}
    const team2 = [
    { name: "Alexander", specialization: "TeamLead" },
    { name: "Gaudi", specialization: "Architect" },
    { name: "Koolhas", specialization: "Architect" },
    { name: "Foster", specialization: "Architect" },
    { name: "Napoleon", specialization: "General" },]
    const financeReport2 = calculateTeamFinanceReport(salaries2, team2)
    console.log(JSON.stringify(financeReport2))
// Task realese
function calculateTeamFinanceReport(salaries, team) {
    const countSalary = Object.keys(salaries).length;
    const countSpecialists = team.length;
    const totalBudget={};
    let totalSalary=0;
    if (countSalary < 1 || countSalary > 10) {
        throw new Error("Count categories of specialist must be in range from 1 to 10.");
    }
    if (countSpecialists < 1 || countSpecialists > 100) {
        throw new Error("Count  specialists must be in range from 1 to 100.");
    }

    for (const key in salaries) {
        if (Object.hasOwnProperty.call(salaries, key)) {
            const nameGroup=`totalBudget${key}`;
            const rateSpecialist = salaries[key];
            const salarySpecialist=culculateSalarySpecialist(key,rateSpecialist);
            totalSalary+=salarySpecialist;
            totalBudget[nameGroup]=Math.trunc(salarySpecialist);
        }
    }
    totalBudget["totalBudgetTeam"]=Math.trunc(totalSalary);
    function culculateSalarySpecialist(specialist,rate) {
        
        let totalSalaryGroup=0;
        let salary=rate["salary"];
        let tax=parseInt(rate["tax"],10);
        if (salary < 100 || countSalary > 100000) {
            throw new Error(`Salary of specialist:${specialist} must be in range from 100 to 100000.`);
        }
        if (tax < 0 || tax > 99) {
            throw new Error(`Tax of specialist:${specialist} must be in range from 0% to 99%.`);
        }
        if(!isFinite(salary)||!isFinite(tax)){ 
            throw new Error(`Salary and tax of specialist:${specialist} must be a Number.`);
        }
        team.forEach(element => {
            if(element.specialization==specialist){
                totalSalaryGroup+=salary+((salary/(100-tax))*tax);   
            }   
        });
        return totalSalaryGroup;
    }
return totalBudget;
}