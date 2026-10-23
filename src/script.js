function showTab(id){
    document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active', p.id===id));
    document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.CDATA_SECTION_NODE.tagret===id));
}