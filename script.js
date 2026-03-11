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

    while: {
        c: `while (x > 0) {
    x--;
}`,
        x86: `loop_start:
cmp eax, 0
jle end
dec eax
jmp loop_start
end:`,
        arm: `loop_start:
cmp w0, #0
b.le end
sub w0, w0, #1
b loop_start
end:`
    },

    switch: {
        c: `switch(x) {
    case 1: y=10; break;
    case 2: y=20; break;
}`,
        x86: `cmp eax, 1
je case1
cmp eax, 2
je case2
jmp end

case1:
mov ebx, 10
jmp end

case2:
mov ebx, 20
end:`,
        arm: `cmp w0, #1
b.eq case1
cmp w0, #2
b.eq case2
b end

case1:
mov w1, #10
b end

case2:
mov w1, #20
end:`
    },

    function: {
        c: `int add(int a, int b) {
    return a + b;
}`,
        x86: `add:
push rbp
mov rbp, rsp
mov eax, edi
add eax, esi
pop rbp
ret`,
        arm: `add:
stp x29, x30, [sp, #-16]!
mov x29, sp
add x0, x0, x1
ldp x29, x30, [sp], #16
ret`
    },

    parameters: {
        c: `int sum(int a, int b, int c, int d, int e, int f, int g);`,
        x86: `rdi, rsi, rdx, rcx, r8, r9
7th parameter pushed to stack`,
        arm: `x0–x7 hold first 8 arguments
additional parameters pushed to stack`
    }

};

function showExample(type) {
    document.getElementById("c-code").textContent = examples[type].c;
    document.getElementById("x86-code").textContent = examples[type].x86;
    document.getElementById("arm-code").textContent = examples[type].arm;
}

showExample("assignment");
