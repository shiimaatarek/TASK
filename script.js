let voteCounts = {
    option1: 0,
    option2: 0,
    option3: 0
};

function vote(option) {
    voteCounts[option]++;
    document.getElementById('count1').textContent = voteCounts.option1;
    document.getElementById('count2').textContent = voteCounts.option2;
    document.getElementById('count3').textContent = voteCounts.option3;
}

function submitVote() {
    alert('Your vote has been submitted!');
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
    document.querySelector('button.btn-danger').disabled = true;
}
