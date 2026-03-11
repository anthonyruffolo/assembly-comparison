const examples = {
    assignment: {
        c: `int a = 5;`,
        x86: `mov eax, 5`,
        arm: `mov w0, #5`
    },

    if: {
        c: `if (x == 0) {
    y = 1;
}`,
        x86: `cmp eax, 0
jne skip
mov ebx, 1
skip:`,
        arm: `cmp w0, #0
b.ne skip
mov w1, #1
skip:`
    },

    loop: {
        c: `for (int i = 0; i < 3; i++) {
    sum += i;
}`,
        x86: `mov ecx, 0
loop_start:
cmp ecx, 3
jge end
add eax, ecx
inc ecx
jmp loop_start
end:`,
        arm: `mov w1, #0
loop_start:
cmp w1, #3
b.ge end
add w0, w0, w1
add w1, w1, #1
b loop_start
end:`
    },

    function: {
        c: `int add(int a, int b) {
    return a + b;
}`,
        x86: `add:
mov eax, edi
add eax, esi
ret`,
        arm: `add:
add x0, x0, x1
ret`
    }
};

function showExample(type) {
    document.getElementById("c-code").textContent = examples[type].c;
    document.getElementById("x86-code").textContent = examples[type].x86;
    document.getElementById("arm-code").textContent = examples[type].arm;
}

// Load default example
showExample("assignment");
