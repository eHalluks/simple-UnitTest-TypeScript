import chalk from 'chalk';
let tokenStatus: boolean = false;
const myRegex: RegExp = /^[a-zA-Z0-9-]+$/;
interface VirtualMachineInterface {
    hostname: string
    turnOn: boolean;
}

export class VirtualMachine implements VirtualMachineInterface {

    private isOn: boolean = false;

    private readonly acceptableHosts: string[] = [
        "EX-MACHINE-EXODUS-2000",
        "EX-MACHINE-VARIOUS-MAX-IP",
        "EX-MACHINE-GOD-LIKES"
    ];

    constructor(public hostname: string) {}

    get turnOn(): boolean {
        return this.isOn;
    }

    set turnOn(value: boolean) {
        this.isOn = value;
    }

    get vmMachineName(): string[] {
        return this.acceptableHosts;
    }

}

const validToCheck = (givenName: string): boolean => myRegex.test(givenName);

const isValidHostName = (signOn: VirtualMachine)  => {

    signOn.vmMachineName.forEach(item => {
        if(item === signOn.hostname){
            return tokenStatus = true;
        }
    });

}

const startTimer =() => {
    let seconds = 0;

    const timer = setInterval(() => {
        seconds++;
        console.clear();
        console.log(`\n   ${chalk.yellowBright(`Next login attempt in: ${chalk.bold.red(seconds)} sec`)}`);

        if (seconds === 10) {
            clearInterval(timer);
            console.log(`\n   ${chalk.bold.underline.greenBright("Try again with correct hostname")}`);
        }
    }, 1000);
}


const runTheVM = (giveTheHostName: string) => {

    const signOn = new VirtualMachine(giveTheHostName);
    isValidHostName(signOn);

    if(!tokenStatus){
        console.error(`\n    ${chalk.redBright("Given hostname does not exist. Access denied! Please try for 10 second")}`);
        setTimeout(() => {
            startTimer();
        }, 5000);
    }else{
        console.log(`\n   ${chalk.cyanBright(`Welcome to the << ${signOn.hostname} >> SUPPORT SYSTEM. ${chalk.magentaBright("Happy Hacking!")}`)}`);
    }

}

/*
Correct group
 */

const giveTheHostName: string = "EX-MACHINE-EXODUS-2000";
//const giveTheHostName: string = "EX-MACHINE-VARIOUS-MAX-IP";
//const giveTheHostName: string = "EX-MACHINE-GOD-LIKES";

//##################################

/*
Incorrect group
 */

//const giveTheHostName: string = "EX-MACHINE-EXODUS";

//##################################


if (giveTheHostName !== "" && validToCheck(giveTheHostName)) {
    runTheVM(giveTheHostName);
} else {
    console.error(`\n    ${chalk.redBright("Please provide correct name")}`);
}