function showTab(id){
    document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active', p.id===id));
    document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tagret===id));
}
document.querySelectorAll('.tab').forEach(tab =>
  tab.addEventListener('click', () => showTab(tab.dataset.target)));