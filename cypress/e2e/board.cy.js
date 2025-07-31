describe('Testes do Kanban Board', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/')
  })

  it('Deve verificar as colunas padrão', () => {
    cy.contains('To Do').should('be.visible')
    cy.contains('Doing').should('exist')
    cy.contains('Done').should('exist')
  })

  it('Deve adicionar uma tarefa', () => {
    cy.get('.add-card').first().click()
    cy.get('input[placeholder="Enter card title"]').type('Tarefa de Teste')
    cy.contains('Save').click()
    cy.contains('Tarefa de Teste').should('be.visible')
  })
})