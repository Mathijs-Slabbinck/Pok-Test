$(document).ready(function () {
    $.getJSON("https://pokeapi.co/api/v2/move?limit=1", function (data1) {
        console.log(data1);
        let allMoves = data1.results;

        for (i = 0; i < 719; i++) {
            let thisMoveInfo = allMoves[i].url;
            fetch(thisMoveInfo).then(response => {
                return response.json()
            }).then(data => {
                $("main").append('<p>{<br/>' + '<span class="width"></span>' + '<span class="bold">"name"</span>' + ' : "' + data.name + '",');
                $("main").append('<span class="width"></span>' + '<span class="bold">"id"</span>' + ' : ' + data.id + ',');
                $("main").append('<br/><span class="width"></span>' + '<span class="bold">"type"</span>' + ' : "' + data.type.name + '",');
                $("main").append('<br/><span class="width"></span>' + '<span class="bold">"damageClass"</span>' + ' : "' + data.damage_class.name + '",');
                $("main").append('<br/><span class="width"></span>' + '<span class="bold">"power"</span>' + ' : ' + data.power + ',');
                $("main").append('<br/><span class="width"></span>' + '<span class="bold">"accuracy"</span>' + ' : ' + data.accuracy + ',');
                $("main").append('<br/><span class="width"></span>' + '<span class="bold">"pp"</span>' + ' : ' + data.pp + ',');
                $("main").append('<br/><span class="width"></span>' + '<span class="bold">"priority"</span>' + ' : ' + data.priority + ',');
                $("main").append('<br/><span class="width"></span>' + '<span class="bold">"target"</span>' + ' : "' + data.target.name + '",');
                let effectEntry = data.effect_entries[0].effect.replace("$effect_chance%", data.effect_chance + "%");
                $("main").append('<br/><span class="width"></span>' + '<span class="bold">"effect entry"</span>' + ' : "' + effectEntry + '",');
                let shortEffectEntry = data.effect_entries[0].short_effect.replace("$effect_chance%", data.effect_chance + "%");
                $("main").append('<br/><span class="width"></span>' + '<span class="bold">"shortEffectEntry"</span>' + ' : "' + shortEffectEntry + '",');
                $("main").append('<br/><span class="width"></span>' + '<span class="bold">"flavorTextEntry"</span>' + ' : "' + data.flavor_text_entries[12].flavor_text + '",');
                $("main").append('<br/><span class="width"></span>' + '<span class="bold">"effectChance"</span>' + ' : "' + data.effect_chance + '",');
                $("main").append('<br/><span class="width"></span>' + '<span class="bold">"generation"</span>' + ' : "' + data.generation.name + '",');
                //conestcombos, normal or super
                if (data.contest_combos != null) {
                    $("main").append('<br/><span class="width"></span>' + '<span class="bold">"contestCombos"</span> : <span class="blue">{</span>');
                    $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"normal"</span> : <span class="red">{</span>');
                    //normal
                    if (data.contest_combos.normal.use_after != null) {
                        $("main").append('<br/><span class="width3"></span>' + '<span class="bold">"useAfter"</span> : <span class="green">{</span>');
                        for (index = 0; data.contest_combos.normal.use_after[index] != undefined; index++) {
                            $("main").append('<br/><span class="width4"></span>' + '<span class="bold">"name"</span>' + ' : "' + data.contest_combos.normal.use_after[index].name + '",');
                        }
                        $("main").append('<br/><span class="width3"></span>' + '<span class="green">}</span>,');
                    } else {
                        $("main").append('<br/><span class="width3"></span>' + '<span class="bold">"useAfter"</span> :' + ' null,');
                    }
                    if (data.contest_combos.normal.use_before != null) {
                        $("main").append('<br/><span class="width3"></span>' + '<span class="bold">"useBefore"</span> : <span class="green">{</span>');
                        for (index = 0; data.contest_combos.normal.use_before[index] != undefined; index++) {
                            $("main").append('<br/><span class="width4"></span>' + '<span class="bold">"name"</span>' + ' : "' + data.contest_combos.normal.use_before[index].name + '",');
                        }
                        $("main").append('<br/><span class="width3"></span>' + '<span class="green">}</span>');
                    } else {
                        $("main").append('<br/><span class="width3"></span>' + '<span class="bold">"useBefore"</span> :' + ' null,');
                    }
                    $("main").append('<br/><span class="width2"></span>' + '<span class="red">},</span>');
                    //super
                    $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"super"</span> : <span class="red">{</span>');
                    if (data.contest_combos.super.use_after != null) {
                        $("main").append('<br/><span class="width3"></span>' + '<span class="bold">"useAfter"</span> : <span class="green">{</span>');
                        for (index = 0; data.contest_combos.super.use_after[index] != undefined; index++) {
                            $("main").append('<br/><span class="width4"></span>' + '<span class="bold">"name"</span>' + ' : "' + data.contest_combos.super.use_after[index].name + '",');
                        }
                        $("main").append('<br/><span class="width3"></span>' + '<span class="green">}</span>,');
                    } else {
                        $("main").append('<br/><span class="width3"></span>' + '<span class="bold">"useAfter"</span> :' + ' null,');
                    }
                    if (data.contest_combos.super.use_before != null) {
                        $("main").append('<br/><span class="width3"></span>' + '<span class="bold">"useBefore"</span> : <span class="green">{</span>');
                        for (index = 0; data.contest_combos.super.use_before[index] != undefined; index++) {
                            $("main").append('<br/><span class="width4"></span>' + '<span class="bold">"name"</span>' + ' : "' + data.contest_combos.super.use_before[index].name + '",');
                        }
                        $("main").append('<br/><span class="width3"></span>' + '<span class="green">}</span>');
                    } else {
                        $("main").append('<br/><span class="width3"></span>' + '<span class="bold">"useBefore"</span> :' + ' null,');
                    }
                    $("main").append('<br/><span class="width2"></span>' + '<span class="red">}</span>');
                    $("main").append('<br/><span class="width"></span>' + '<span class="blue">}</span>');
                } else {
                    $("main").append('<br/><span class="width"></span>' + '<span class="bold">"contestCombos"</span> : null,');
                }
                $("main").append('<br/><span class="width"></span>' + '<span class="bold">"meta"</span> : <span class="blue">{</span>');
                $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"ailmentName"</span> : "' + data.meta.ailment.name + '",');
                $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"ailmentChance"</span> : "' + data.meta.ailment_chance + '",');
                $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"categoryName"</span> : "' + data.meta.category.name + '",');
                $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"critRate"</span> : ' + data.meta.crit_rate + ',');
                $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"drain"</span> : ' + data.meta.drain + ',');
                $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"flinch_chance"</span> : ' + data.meta.flinch_chance + ',');
                $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"healing"</span> : ' + data.meta.healing + ',');
                $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"max_hits"</span> : ' + data.meta.max_hits + ',');
                $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"max_turns"</span> : ' + data.meta.max_turns + ',');
                $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"min_hits"</span> : ' + data.meta.min_hits + ',');
                $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"min_turns"</span> : ' + data.meta.min_turns + ',');
                $("main").append('<br/><span class="width2"></span>' + '<span class="bold">"stat_chance"</span> : ' + data.meta.stat_chance + ',');
                $("main").append('<br/><span class="width"></span>' + '<span class="blue">},</span>');
                if (data.contest_effect != null) {
                    $("main").append('<br/><span class="width"></span>' + '<span class="bold">"contest_effect"</span> : "' + data.contest_effect.url + '"');
                } else {
                    $("main").append('<br/><span class="width"></span>' + '<span class="bold">"contestEffect"</span> : null,');
                }
                $("main").append('<br/>},</p>');
            })
        }
    });



});