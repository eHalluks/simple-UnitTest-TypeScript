import { VirtualMachine } from './VirtualMachine';

describe('VirtualMachine', () => {
    let vm: VirtualMachine;

    beforeEach(() => {
        vm = new VirtualMachine("EX-MACHINE-EXODUS-2000");
    });

    it('should have initial state', () => {
        expect(vm.hostname).toEqual("EX-MACHINE-EXODUS-2000");
        expect(vm.turnOn).toBe(false);
        expect(vm.vmMachineName).toEqual([
            "EX-MACHINE-EXODUS-2000",
            "EX-MACHINE-VARIOUS-MAX-IP",
            "EX-MACHINE-GOD-LIKES"
        ]);
    });

    it('should turn on the virtual machine', () => {
        vm.turnOn = true;
        expect(vm.turnOn).toBe(true);
    });

    it('should return the valid virtual machine names', () => {
        expect(vm.vmMachineName).toEqual([
            "EX-MACHINE-EXODUS-2000",
            "EX-MACHINE-VARIOUS-MAX-IP",
            "EX-MACHINE-GOD-LIKES"
        ]);
    });
});

//npx jest --verbose --testPathPattern=virtualMachine.test.ts