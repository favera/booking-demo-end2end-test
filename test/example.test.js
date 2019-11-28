describe("login form", () => {
  it("start google home page", async () => {
    jest.setTimeout(60000);
    await page.goto("http://localhost:9009/?path=/story/loginform--default");
    await page.waitFor("input[name='username']");
    await page.type("input[name='username']", "test@mail.com");
    await page.waitFor(3000);
  });
});
