/**
 * 对html页面填充菜单信息
 * @param all
 */
var addHtmlSecMenu = function(play_kind){
    var new_play = {};
    for(var i in play_kind)
    {
        var pname = play_kind[i].pname;
        if(new_play[pname] == undefined)
        {
            new_play[pname] = [];
        }
        new_play[pname].push(play_kind[i])
    }
    var menu = template('menu',{data:new_play})
    $('#dv_play_list').html(menu)
}


//二级分类切换
var cut = function(play_id,exam,explain,help){
    var hix = function(start,end,tpl,other){
        var html_1 = ''
        var type = [
            '万位',
            '千位',
            '百位',
            '十位',
            '个位',
            '组三',
            '组六',
            '组二',
            '不定位',
            '复式',
            '冠军',
            '亚军',
            '季军',
            '第四名',
            '第五名',
            '第六名',
            '第七名',
            '第八名',
            '第九名',
            '第十名',
            '任选一',
            '任选二',
            '任选三',
            '任选四',
            '任选五',
            '任选六',
            '任选七',
            '任选八',
            '定位胆',
            '不定位',
            '组选',
            '和值',
            '猜中位',
            '定单双',
            '组选120',
            '二重号',
            '单号',
            '三重号',
            '单号',
            '三重号',
            '二重号',
            '四重号',
            '单号',
            '一帆风顺',
            '好事成双',
            '三星报喜',
            '四季发财',
            '组选24',
            '前三和值',
            '中三和值',
            '后三和值',
            '前二和值',
            '后二和值',
            '任三和值',
            '任二和值',
            '直选跨度',
            '混合组选',
            '组选和值',
            '组选包胆',
            '和值尾数',
            '特殊号',
            "特码"
        ]
        var data = {
            list:[],
        };
        for(var i = start;i<end;i++)
        {
            data.list.push(type[i]);
        }
        if(other != undefined && other.allow != undefined)
        {
            data.allow = 1;
        }
        //模板选择
        switch (tpl)
        {
            case 'betting_and_values':
                data.num = [];
                for(var i =other.start; i <= other.end;i++)
                {
                    data.num.push(i)
                }

                break;
            case undefined:
                tpl = 'betting_duplex';
                break;
        }
        console.log(tpl)
        //选择模板
        var select_template = function(data){
            var html = template(tpl, data);
            $('#dv_pick_region_c').html(html);
        }

        select_template(data)

    }


    //投注区域变更
    $('#yilou').show()
    switch (parseInt(play_id,10))
    {
        case 7:
        case 23:
            hix(0,5);
            break;
        case 337:
            hix(0,3,'betting_11x5');
            break;
        case 8:
            hix(0,4)
            break;
        case 9:
            hix(1,5)
            break;
        case 10:
        case 295:
            hix(0,3);
            break;
        case 11:
        case 14:
        case 17://组三
        case 287:
            hix(5,6)
            break;
        case 12://组六
        case 15:
        case 18:
        case 288:
            hix(6,7);
            break;
        case 13:
            hix(1,4);
            break;
        case 16:
        case 285:
            hix(2,5);
            break;
        case 19:
        case 293:
            hix(0,2);
            break;
        case 20:
        case 22:
        case 294:
            hix(7,8);
            break;
        case 21:
            hix(3,5);
            break;
        case 23:
            hix(3,5);
            break;
        case 24:
        case 34:
        case 35:
        case 319:
        case 369:
        case 370:
        case 371:
        case 372:
        case 373:
        case 374:
        case 375:
        case 376:
            hix(8,9);
            break;
        //任选
        case 25:
        case 28:

        case 453:
            hix(0,5);
            break;
        case 340:
        case 338:
            hix(0,5,'betting_11x5');
            break;
        case 26:
            hix(5,6,'betting_duplex',{allow:1});
            break;
        case 27:
            hix(6,7,'betting_duplex',{allow:1});
            break;
        case 420:
            hix(6,7,1);
            break;
        case 29:
            hix(7,8,'betting_duplex',{allow:1});
            break;
        case 342:
        case 343:
            //hix(7,8,1);
            hix(30,31,'betting_11x5',{allow:1});
            break;
        case 423:
            hix(7,8,'betting_car',{allow:1});
            break;
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 286:
        case 289:
        case 386:
        case 392:
        case 398:
        case 426:
        case 428:

            var tmp ='<div class="l-number-input" style="display: block;"><label>请在下方的输入框内输入或粘贴投注内容，每注请使用 逗号、空格或 “;” 分割开</label><textarea id="textarea-code"></textarea></div>';
            $(config.bet).html(tmp)
            hix(0,0,'betting_danshi')
            break;
        case 69:
        case 70:
        case 341:
        case 454:
            hix(0,0,'betting_danshi',{allow:1})
            break;
        case 339:
            hix(0,0,'betting_danshi',{allow:1})
            break;
        case 421:
            hix(0,0,'betting_car_danshi',{allow:1})
            break;
        case 119:
            hix(10,15,false,1)
            break;
        case 129:
            hix(15,20,false,1)
            break;
        case 283:
        case 321:
            hix(2,5);
            break;
        case 284:
            hix(0,0,'betting_3d_danshi',{allow:1})
            break;
        case 322:
            //hix(31,32);
            hix(31,32,'betting_and_values',{start:0,end:27});
            break;
        //任选1
        case 323:
            hix(20,21,'betting_11x5');
            break;
        case 324:
            hix(21,22,'betting_11x5');
            break;
        case 325:
            hix(22,23,'betting_11x5');
            break;
        case 326:
            hix(23,24,'betting_11x5');
            break;
        case 327:
            hix(24,25,'betting_11x5');
            break;
        case 328:
            hix(25,26,'betting_11x5');
            break;
        case 329:
            hix(26,27,'betting_11x5');
            break;
        case 330:
            hix(27,28,'betting_11x5');
            break;
        case 344:
            hix(32,33,'betting_11x5_center');
            break;
        case 345:
            hix(33,34,'betting_11x5_single_and_double');
            break;
        case 346:
            hix(34,35);
            break;
        case 347:
        case 348:
        case 357:
        case 361:
            hix(35,37);
            break;
        case 349:
        case 359:
        case 363:
            hix(37,39);
            break;
        case 350:
            hix(39,41);
            break;
        case 351:
            hix(41,43);
            break;
        case 352:
            hix(43,44);
            break;
        case 353:
            hix(44,45);
            break;
        case 354:
            hix(45,46);
            break;
        case 355:
            hix(46,47);
            break;
        case 356:
        case 360:
            hix(47,48);
            break;
        case 358:
        case 362:
            hix(35,36);
            break;
        case 364:
            hix(48,49,'betting_and_values',{start:0,end:27});
            break;
        case 365:
            hix(49,50,'betting_and_values',{start:0,end:27});
            break;
        case 366:
            hix(50,51,'betting_and_values',{start:0,end:27});
            break;
        case 367:
            hix(51,52,'betting_and_values',{start:0,end:18});
            break;
        case 368:
            hix(52,53,'betting_and_values',{start:0,end:18});
            break;
        case 382:
            hix(53,54,'betting_and_values',{start:0,end:27,allow:1});
            break;
        case 381:
            hix(54,55,'betting_and_values',{start:0,end:18,allow:1});
            break;
        case 377:
            hix(0,2,'betting_single_and_double');
            break;
        case 378:
            hix(3,5,'betting_single_and_double');
            break;
        case 379:
            hix(0,3,'betting_single_and_double');
            break;
        case 380:
            hix(2,5,'betting_single_and_double');
            break;
        case 383:
        case 391:
        case 397:
        case 403:
        case 406:
            hix(55,56);
            break;
        //组选和值
        case 387:
        case 393:
        case 399:
            hix(57,58,'betting_and_values',{start:1,end:26});
            break;
        case 404:
        case 407:
            hix(57,58,'betting_and_values',{start:1,end:17});
            break;
        case 388:
        case 394:
        case 400:
        case 405:
        case 408:
            hix(58,59);
            break;
        case 389:
        case 395:
        case 401:
            hix(59,60);
            break;
        case 390:
        case 396:
        case 402:
            hix(60,61,'betting_special');
            break;
    /**
     * 北京赛车
     */
        case 409:
            hix(10,15,'betting_car');
            break;
        case 410:
            hix(15,20,'betting_car');
            break;
        case 411:
            hix(20,21,'betting_car');
            break;
        case 412:
            hix(21,22,'betting_car');
            break;
        case 413:
            hix(22,23,'betting_car');
            break;
        case 414:
            hix(23,24,'betting_car');
            break;
        case 415:
            hix(24,25,'betting_car');
            break;
        case 416:
            hix(25,26,'betting_car');
            break;
        case 417:
            hix(26,27,'betting_car');
            break;
        case 418:
            hix(27,28,'betting_car');
            break;
        case 419:
        case 422:
            hix(10,15,'betting_car');
            break;
        case 424:
            hix(10,11,'betting_car');
            break;
        case 425:
            hix(10,12,'betting_car');
            break;
        case 427:
            hix(10,13,'betting_car');
            break;
        case 429:
            hix(10,11,'betting_car_size');
            break;
        case 432:
            hix(10,11,'betting_car_single');
            break;
        case 430:
            hix(11,12,'betting_car_size');
            break;
        case 433:
            hix(11,12,'betting_car_single');
            break;
        case 431:
        case 456:
        case 457:
            hix(12,13,'betting_car_size');
            break;
        case 434:
        case 458:
        case 459:
            hix(12,13,'betting_car_single');
            break;
        case 435:
            hix(61,62);
            break;
    }
}


/**
 * 计算注数
 */
var count_num = {
    change:function(num){
        return num;
    },
    mul:function(detail){
        //{1,2,3,4,5}
        var num = 1;
        $(detail.split(',')).each(function(i,v){
            num = num * v.split('-').length
        })
        return num;
    },
    shiyi_mul:function(detail){

        //{1,2,3,4,5}
        var num = 0;
        var new_detail = [];
        detail = detail.substr(1, detail.length-2)
        $(detail.split(',')).each(function(i,v){

            if(v != '')
            {
                new_detail[new_detail.length] = v.split('-');
            }

        })

        $(new_detail[0]).each(function(i,v){
            $(new_detail[1]).each(function(i1,v1){
                $(new_detail[2]).each(function(i2,v2){
                    if(v == v1 || v1 == v2 || v2 == v)
                    {
                    } else {
                        num++;
                    }
                })
            })
        })
        return num;
    },
    shiyi_mul_2:function(detail){
        //{1,2,3,4,5}
        var num = 0;
        var new_detail = [];
        detail = detail.substr(1, detail.length-2)
        $(detail.split(',')).each(function(i,v){
            if(v != '')
            {
                new_detail[new_detail.length] = v.split('-');
            }
        })

        $(new_detail[0]).each(function(i,v){
            $(new_detail[1]).each(function(i1,v1){
                if(v == v1)
                {
                } else {
                    num++;
                }
            })
        })

        return num;
    },
    mul_allow_2:function(detail){
        var data_sel = detail.substring(1,detail.length-1).split('-');
        var max_place = 0;
        var nums = 0;
        var s = data_sel.length;
        for(var i=0; i<=max_place; i++ ){
            if( s > 1 ){//二码不定位必须选两位或者以上
                nums += s*(s-1)/2;
            }
        }
        return this.change(nums);
    },
    mul_allow_3:function(detail){
        var data_sel = detail.substring(1,detail.length-1).split('-');
        var max_place = 0;
        var nums = 0;
        var s = data_sel.length;
        for(var i=0; i<=max_place; i++ ){
            if( s > 2 ){//必须选三位或者以上

                nums += s*(s-1)*(s-2)/6;
            }
        }
        return this.change(nums);
    },
    mul_allow_4:function(detail){
        var data_sel = detail.substring(1,detail.length-1).split('-');
        var max_place = 0;
        var nums = 0;
        var s = data_sel.length;
        for(var i=0; i<=max_place; i++ ){
            if( s > 3 ){//必须选四位或者以上
                nums += s*(s-1)*(s-2)*(s-3)/24;
            }
        }
        return this.change(nums);
    },
    mul_allow_5:function(detail){
        var data_sel = detail.substring(1,detail.length-1).split('-');
        var max_place = 0;
        var nums = 0;
        var s = data_sel.length;
        for(var i=0; i<=max_place; i++ ){
            if( s > 4 ){//必须选四位或者以上
                nums += s*(s-1)*(s-2)*(s-3)*(s-4)/120;
            }
        }
        return this.change(nums);
    },
    mul_allow_6:function(detail){
        var data_sel = detail.substring(1,detail.length-1).split('-');
        var max_place = 0;
        var nums = 0;
        var s = data_sel.length;
        for(var i=0; i<=max_place; i++ ){
            if( s > 5 ){//必须选四位或者以上
                nums += s*(s-1)*(s-2)*(s-3)*(s-4)*(s-5)/720;
            }
        }
        return this.change(nums);
    },
    mul_allow_7:function(detail){
        var data_sel = detail.substring(1,detail.length-1).split('-');
        var max_place = 0;
        var nums = 0;
        var s = data_sel.length;
        if( s > 6 ){//必须选四位或者以上
            nums += s*(s-1)*(s-2)*(s-3)*(s-4)*(s-5)*(s-6)/5040;
        }
        return this.change(nums);
    },
    mul_allow_8:function(detail){
        var data_sel = detail.substring(1,detail.length-1).split('-');
        var nums = 0;
        var s = data_sel.length;
        if( s > 7 ){//必须选四位或者以上
            nums += s*(s-1)*(s-2)*(s-3)*(s-4)*(s-5)*(s-6)*(s-7)/40320;
        }
        return this.change(nums);
    },
    front_2:function(detail){
        var data_sel = detail.substring(1,detail.length-1).split(',');
        data_sel[0] = data_sel[0].split('-');
        if(data_sel[1].length > 0)
        {
            data_sel[1] = data_sel[1].split('-');
        }
        var nums = 0;
        if( data_sel[0].length > 0 && data_sel[1].length > 0 ){
            for(var i=0; i<data_sel[0].length; i++ ){
                for(var j=0; j<data_sel[1].length; j++ ){
                    if( data_sel[0][i] != data_sel[1][j]){
                        nums++;
                    }
                }
            }
        }
        return this.change(nums);
    },
    front_zu_2:function(detail){
        var data_sel = detail.substring(1,detail.length-1).split('-');
        var max_place = 0;
        var nums = 0;
        var s = data_sel.length;
        if( s > 1 ){//组六必须选三位或者以上
            nums += s*(s-1)/2;
        }
        return this.change(nums);
    },
    front_3:function(detail){
        var data_sel = detail.substring(1,detail.length-1).split(',');
        data_sel[0] = data_sel[0].split('-');
        if(data_sel[1].length > 0)
        {
            data_sel[1] = data_sel[1].split('-');
        }
        if(data_sel[2].length > 0)
        {
            data_sel[2] = data_sel[2].split('-');
        }
        nums = 0;
        if( data_sel[0].length > 0 && data_sel[1].length > 0 && data_sel[2].length > 0 ){
            for(var i=0; i<data_sel[0].length; i++ ){
                for(var j=0; j<data_sel[1].length; j++ ){
                    for(var k=0; k<data_sel[2].length; k++ ){
                        if( data_sel[0][i] != data_sel[1][j] && data_sel[0][i] != data_sel[2][k] && data_sel[1][j] != data_sel[2][k] ){
                            nums++;
                        }
                    }
                }
            }
        }
        return this.change(nums);
    },
    front_zu_3:function(detail){
        var data_sel = detail.substring(1,detail.length-1).split('-');
        var nums = 0;
        var s = data_sel.length;
        if( s > 2 ){//组六必须选三位或者以上
            nums += s*(s-1)*(s-2)/6;
        }
        return this.change(nums);
    },
    org_3:function(detail){
        var arr = detail.match(/(\d)/g)
        if(arr == null)
        {
            return 0;
        }
        var len = arr.length
        num = 0
        for(var i = 0;i< len;i++)
        {
            for(var ii = 0;ii< len;ii++)
            {
                for(var iii = 0; iii<len;iii++)
                {
                    if(i == ii && ii == iii)
                        continue;
                    if(i != ii && ii != iii && iii != i)
                        continue;
                    num++;
                }
            }
        }
        /*//显示注数
         $('#lt_sel_nums').text(num)
         //价格
         $('#lt_sel_money').text(num*2)*/
        return num / 3;
    },
    org_6:function(detail){
        var arr = detail.match(/(\d+)/g)
        if(arr == null)
        {
            return 0;
        }
        var len = arr.length
        var count_arr = []
        num = 0
        for(var i = 0;i< len;i++)
        {
            for(var ii = 0;ii< len;ii++)
            {
                for(var iii = 0;iii< len;iii++)
                {
                    if(i == ii || i == iii || ii == iii)
                        continue;
                    num++
                }
            }
        }

        return num / 6;
    },
    org_2:function(detail){
        var arr = detail.match(/(\d+)/g)
        if(arr == null)
        {
            return 0;
        }
        var len = arr.length
        var count_arr = []
        num = 0
        for(var i = 0;i< len;i++)
        {
            for(var ii = 0;ii< len;ii++)
            {
                if(i == ii)
                    continue;
                num++
            }
        }


        return num;
    },
    position:function(detail){
        var arr = detail.match(/(\d+)/g)
        if(arr == null)
        {
            return 0;
        }
        return arr.length;
    },
    //组选120.24算法
    /**
     *
     * @param num 二重号长度
     * @param baseLen 单号长度
     * @returns {number}
     */
    groupSelection:function(numLen,baseLen){
        var count = 1;
        for (var i = 0; i < baseLen; i++) {
            count *= (numLen--);
        }
        for (; baseLen > 1; baseLen--) {
            count /= baseLen;
        }
        return count;
    },
    /**
     * 递归循环计算注数
     * @param detail  要计算的内容
     * @param nums
     */
    groupSelectionDispose:function($arr,$n,$result){
        var $len = $arr.length;
        var $ret = [];
        if($result == undefined)
        {
            $result = [];
        }
        for(var $i = 0;$i<$len;$i++)
        {
            $result = $result.concat([$arr[$i]]);
            var $temp = [].concat($arr);
            for(var i=0;i<=$i;i++)
            {
                $temp.shift()
            }
            if($result.length == $n)
            {
                $ret[$ret.length] = [].concat($result);
            } else {
                $tmp = count_num.groupSelectionDispose($temp,$n,$result);
                for(var it=0;it<$tmp.length;it++)
                {
                    $ret[$ret.length] = [].concat($tmp[it]);
                }
            }
            $result.pop();
        }
        return $ret;
    },
    /**
     * 判断两个数组重复值
     * @param a
     * @param b
     */
    repeat:function(a,b){
        var temp = a.join();
        for(var kr=0;kr<b.length;kr++)
        {
            if(temp.search(b[kr]) >= 0)
            {
                return false;
            }
        }
        return true;
    },
    /**
     *
     * @param detail    投注的详细内容
     * @param nums  单号的长度
     * @param secNums 二重号长度
     * @returns {number}
     */
    groupSelectionMore:function(detail,oneNums,secNums){
        var t = detail.split(',');
        var secRow = t[0].substr(1,t[0].length).split('-');
        var oneRow = t[1].substr(0,t[1].length-1).split('-');
        var count = 0;

        var one_arr = count_num.groupSelectionDispose(oneRow,oneNums);
        var sec_arr = count_num.groupSelectionDispose(secRow,secNums);

        //去除重复的数组
        var new_arr = [];
        for(var k =0;k<one_arr.length;k++)
        {
            for(var k2 = 0;k2<sec_arr.length;k2++)
            {
                if(count_num.repeat(one_arr[k],sec_arr[k2]))
                {
                    count++;
                }

            }
        }
        return count;
    },
    /**
     * 去重复
     * @param detail
     * @returns {string}
     */
    unique:function(detail) {
        detail = detail.substring(1).substring(detail.length-2,0)
        var arr = detail.split('#')
        var result = [], hash = {};
        for (var i = 0, elem; (elem = arr[i]) != null; i++) {
            if (!hash[elem]) {
                result.push(elem);
                hash[elem] = true;
            }
        }
        return '{'+result.join('#')+'}';
    },
    single:function(detail){
        var arr = detail.split('#')
        return arr.length;
    },
    /**
     * 直选跨度
     * @param detail 投注内容
     * @param len 长度
     */
    span:function(detail,len){
        var arr = detail.substr(1,detail.length-2).split('-')
        if(len == 3)
        {
            var l = [10,54,96,126,144,150,144,126,96,54];
        } else {
            var l = [10,18,16,14,12,10,8,6,4,2];
        }
        var count = 0;
        for(var i =0;i<arr.length;i++)
        {
            count += l[arr[i]];
        }
        return count;
    },
    /**
     * 组选和值
     * @param detail
     */
    groupSum:function(detail){
        var arr = detail.substr(1,detail.length-2).split('-')
        var newArr = {};
        for(var i = 0;i<1000;i++)
        {
            var temp = '';
            if(i.toString().length == 1)
            {
                temp = '00'+ i.toString()
            } else if(i.toString().length == 2) {
                temp = '0' + i.toString()
            } else {
                temp = i.toString();
            }

            if(temp[0] == temp[1] && temp[1] == temp[2])
            {
                continue;
            }
            var t = [parseInt(temp[0],10),parseInt(temp[1],10),parseInt(temp[2],10)];
            t.sort();
            newArr[t.join()] = t;
        }
        var count = 0;
        for(var i = 0;i<arr.length;i++)
        {
            for(var j in newArr)
            {
                var v = newArr[j];
                if(arr[i] == (v[0] + v[1] + v[2]))
                {
                    count++;
                }
            }
        }
        return count;
    },
    groupSum_2:function(detail){
        var arr = detail.substr(1,detail.length-2).split('-')
        var newArr = {};
        for(var i = 0;i<100;i++)
        {
            var temp = '';
            if(i.toString().length == 1)
            {
                temp = '0'+ i.toString()
            } else {
                temp = i.toString()
            }

            if(temp[0] == temp[1])
            {
                continue;
            }
            var t = [parseInt(temp[0],10),parseInt(temp[1],10)];
            t.sort();
            newArr[t.join()] = t;
        }
        var count = 0;
        for(var i = 0;i<arr.length;i++)
        {
            for(var j in newArr)
            {
                var v = newArr[j];
                if(arr[i] == (v[0] + v[1]))
                {
                    count++;
                }
            }
        }
        return count;
    }
}
//奖金计算
var bonus = function(rebate){

    var  play_id = $(config.play_id).attr('play_id')
    var leave_bonus = $(config.play_id).attr('leave_bonus')
    var  bonus = $(config.play_id).attr('bonus')
    var now_bonus = bonus - (100 - rebate) * leave_bonus;
    //中奖奖金
    now_bonus = parseInt(now_bonus * 100,10) / 100;

    return now_bonus.toFixed(2)
}

var change_chase_list = function(){
    var num = parseInt($('#dv_sure_pn_zh').val(),10)
    //获取期号
    var data = {
        expect : []
    }
    //获取开始期号

    //var html = $('#dv_sure_pn_start option:selected').nextAll(':lt('+num+')').html()
    data.expect.push($('#dv_sure_pn_start option:selected').text())
    $('#dv_sure_pn_start option:selected').nextAll(':lt('+(num-1)+')').each(function(i,v){
        data.expect.push($(v).attr('value'))
    })
    var bet_chase_list_html = template('bet_chase_list',data);
    $('#dv_sure_bet_pn_list').html(bet_chase_list_html)
}


//金额计算
var calcuate = function(){
    //追号期数
    var num = parseInt($('#dv_sure_bet_pn_list .lottery_bs').length,10)
    $('#dv_sure_pn_num').text(num)
    //元角分
    var single_money = parseFloat($('#bet_ms_fg input:checked').attr('spv')) * 2
    //投注注数
    var bet_num = parseInt($('#dv_sure_note_num').text(),10)
    var singleTotalMoney = single_money * bet_num
    var expect_num = parseInt($('#dv_sure_pn_num').text(),10)
    var count = 0;
    $('#dv_sure_bet_pn_list .lottery_bs').each(function(i,v){
        var tmp = parseInt($(v).find('input').val(),10)
        count += singleTotalMoney * tmp
    })
    if(isNaN(count))
    {
        count = 0;
    }
    //总金额
    $('#dv_sure_bet_money').text((count).toFixed(2));
    /*var b = bonus(user.rebate);
     b = $(config.beishu).val() * b * mode / 2;
     $('#now_bonus').text(parseFloat(b).toFixed(2))*/
}

//监测选取的球位计算注数
var monitor = function(){
    //获取play_id
    var play_id = parseInt($(config.play_id).attr('play_id'),10)
    var result = []
    var detail = '{'
    var num = 1;
    //单式
    var returnMessage = new Object()
    switch(parseInt(play_id,10))
    {
        case 26:
        case 27:
        case 29:
        case 342:
        case 343:
        case 420:
        case 423:

            $(config.bet).find(config.list).each(function(i,v){
                $(v).find(config.bet_select).each(function(iii,vvv){
                    detail += $(vvv).text() + ','
                })
                if($(v).find(config.bet_select).text() != '')
                {
                    result[result.length] = $(v).find(config.bet_select).text()
                }
            })
            detail = detail.substring(0,detail.length-1) + '}'
            break;
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 286:
        case 289:
            var re = new RegExp('[0-9]+','g')
            try{
                detail += $(config.textarea).val().match(re).join('#') + '}'
            } catch(e){
                detail += '}'
            }
            break;
        case 398:
        case 386:
        case 392:
            var re = new RegExp('[0-9]+','g')
            try{
                detail += $(config.textarea).val().match(re).join('#') + '}'
            } catch(e){
                detail += '}'
            }
            break;
        case 69:
        case 70:
        case 284:
            var re = new RegExp('[0-9]+','g')
            try{
                detail += $(config.textarea).val().match(re).join('#') + '}'
            } catch(e){
                detail += '}'
            }
            break;
        case 426:
            var re = new RegExp('[0-9]+','g')
            var tmp = [];
            try{
                $($(config.textarea).val().match(re)).each(function(i,v){
                    if(v > 11)
                    {
                        returnMessage.error = '号码"'+v+'"有误,请检查并重新输入';
                    } else {
                        tmp[tmp.length] = parseInt(v,10);
                    }
                    if(tmp.length == 2)
                    {
                        detail += tmp[0]+','+tmp[1]+'#'
                        tmp = [];
                    }

                })
                detail = detail.substr(0,detail.length-1) + '}'
            } catch(e){
                detail += '}'
            }
            break;
        case 339:
        case 421:
        case 428:
            var re = new RegExp('[0-9]+','g')
            var tmp = [];
            try{
                $($(config.textarea).val().match(re)).each(function(i,v){
                    if(v > 11)
                    {
                        returnMessage.error = '号码"'+v+'"有误,请检查并重新输入';
                    } else {
                        tmp[tmp.length] = parseInt(v,10);
                    }
                    if(tmp.length == 3)
                    {
                        detail += tmp[0]+','+tmp[1]+','+tmp[2]+'#'
                        tmp = [];
                    }

                })
                detail = detail.substr(0,detail.length-1) + '}'
            } catch(e){
                detail += '}'
            }

            break;
        case 341:
            var re = new RegExp('[0-9]+','g')
            var tmp = [];
            try{
                $($(config.textarea).val().match(re)).each(function(i,v){
                    if(v > 11)
                    {
                        returnMessage.error = '号码"'+v+'"有误,请检查并重新输入';
                    } else {
                        tmp[tmp.length] = parseInt(v,10);
                    }
                    if(tmp.length == 2)
                    {
                        detail += tmp[0]+','+tmp[1]+'#'
                        tmp = [];
                    }

                })
                detail = detail.substr(0,detail.length-1) + '}'
            } catch(e){
                detail += '}'
            }
            break;
        default :
            $(config.bet).find(config.list).each(function(i,v){
                var tmp = ''
                $(v).find(config.bet_select).each(function(ii,vv){
                    tmp += $(vv).text() + '-'
                })
                detail += tmp.substring(0,tmp.length-1)+','
                switch(parseInt(play_id,10))
                {
                    case 25:
                    case 28:
                    case 338:
                    case 419:
                    case 340:
                    case 422:
                        result[result.length] = $(v).find(config.bet_select).text()
                        break;
                    default:

                        if($(v).find(config.bet_select).text() != '')
                        {
                            result[result.length] = $(v).find(config.bet_select).text()
                        }
                        break;
                }
            })
            detail = detail.substring(0,detail.length-1) + '}'
            break;
    }
    //是否符合规则
    switch (parseInt(play_id,10))
    {
        case 7:
            if(result.length != 5)
            {
                returnMessage.error = '必须选中5个位置的球'
            } else {
                //计算注数
                num = count_num.mul(detail)
            }
            break;
        case 8:
        case 9:
            if(result.length != 4)
            {
                returnMessage.error = '必须选中4个位置的球'
            } else {
                //计算注数
                num = count_num.mul(detail)
            }
            break;
        case 10:
        case 13:
        case 16:
        case 285:
        case 379:
        case 380:
            if(result.length != 3)
            {
                returnMessage.error = '必须选中3个位置的球'
            } else {
                //计算注数
                num = count_num.mul(detail)
            }
            break;
        case 11:
        case 14:
        case 17:
        case 287:
            if(result[0].length < 2)
            {
                returnMessage.error = '组三至少要选中2个球'
            } else {
                //计算注数
                num = count_num.org_3(detail)
            }
            break;
        case 12:
        case 15:
        case 18:
        case 288:
            if(result[0].length < 3)
            {
                returnMessage.error = '组六至少要选中3个球'
            } else {
                //计算注数
                num = count_num.org_6(detail)
            }
            break;
        case 19:
        case 21:
        case 377:
        case 378:
            if(result.length != 2)
            {
                returnMessage.error = '必须选中2个位置的球'
            } else {
                //计算注数
                num = count_num.mul(detail)
            }
            break;
        case 20:
        case 22:
            try{
                if(result[0].length < 2)
                {
                    returnMessage.error = '组二至少要选中2个球'
                } else {
                    //计算注数
                    num = count_num.org_2(detail)
                }
            } catch (e) {
                returnMessage.error = '组二至少要选中2个球'
            }

            break;
        case 409:
        case 410:
        case 411:
        case 23:
        case 119:
        case 129:
        case 291:
        case 292:
        case 321:
        case 337:

            if(result.length < 1)
            {
                returnMessage.error = '定位胆必须选中1个位置的球'
            } else {
                //计算注数
                num = count_num.position(detail)
            }
            break;
        case 435:
        case 24:
        case 34:
        case 35:
        case 319:
        case 352:
        case 353:
        case 354:
        case 355:
        case 371:
        case 373:
        case 389:
        case 395:
        case 401:
            if(result.length < 1)
            {
                returnMessage.error = '必须选中1个号码'
            } else {
                //计算注数
                num = count_num.position(detail)
            }
            break;
        case 25:
            var n = 0;
            for(var i =0;i<5;i++)
            {
                if(result[i] == '')
                {
                } else {
                    n++;
                }
            }
            if(n < 3)
            {
                returnMessage.error = '任三复式至少选择3个位置'
            } else {
                var len = [];
                var t = detail.split(',')
                var tmp = null;
                for(var tt in t)
                {
                    tmp = t[tt].match(/(\d+)/g)
                    if(tmp != null)
                    {
                        len.push(tmp.length)
                    }
                    tmp = null;
                }
                var t_len = len.length;
                num = 0;
                for(var a1 = 0;a1 < t_len;a1++)
                {
                    for(var a2 = a1 + 1;a2 < t_len;a2++)
                    {
                        for(var a3 = a2 + 1;a3 < t_len;a3++)
                        {
                            num += len[a1] * len[a2] * len[a3]
                        }
                    }
                }
            }
            break;
        //十一选5任选3复式
        case 338:
        case 419:
            var n = 0;
            for(var i =0;i<5;i++)
            {
                if(result[i] == '')
                {
                    n++;
                }
            }
            if(n != 2)
            {
                returnMessage.error = '任三复式必选选择3个位置'
            } else {
                num = count_num.shiyi_mul(detail.replace(/,,/g,','));
            }
            break;
        //任二复式
        case 28:
            var n = 0;
            for(var i =0;i<5;i++)
            {
                if(result[i] == '')
                {
                } else {
                    n++;
                }
            }
            if(n < 2)
            {
                returnMessage.error = '任二复式至少选择2个位置'
            } else {
                var len = [];
                var t = detail.split(',')
                var tmp = null;
                for(var tt in t)
                {
                    tmp = t[tt].match(/(\d+)/g)
                    if(tmp != null)
                    {
                        len.push(tmp.length)
                    }
                    tmp = null;
                }
                var t_len = len.length;
                num = 0;
                for(var a1 = 0;a1 < t_len;a1++)
                {
                    for(var a2 = a1 + 1;a2 < t_len;a2++)
                    {
                        num += len[a1] * len[a2]

                    }
                }
            }
            break;
        case 340:
        case 422:
            var n = 0;
            for(var i =0;i<5;i++)
            {
                if(result[i] == '')
                {
                    n++;
                }
            }
            if(n != 3)
            {
                returnMessage.error = '任二复式必选选择2个位置'
            } else {
                num = count_num.shiyi_mul_2(detail.replace(/,,/g,','));
            }
            break;
        case 26:
            try{
                if(result[0].length < 2)
                {
                    returnMessage.error = '组三至少要选中2个球'
                }
            } catch (e) {
                returnMessage.error = '组三至少要选中2个球'
            }
            console.log($(config.bet).find('.choose_ball_box_allow .ballxz'))

            if($(config.bet).find('.choose_ball_box_allow .ballxz').length != 3)
            {
                returnMessage.error = '请选中3个任选的位置'
            }
            num = count_num.org_3(detail);
            break;
        case 27:
        case 343:
        case 420:
            try{
                if(detail.split(',').length < 3)
                {
                    returnMessage.error = '至少要选中3个球'
                }
            } catch (e) {
                returnMessage.error = '至少要选中3个球'
            }
            if($(config.bet).find('.choose_ball_box_allow .ballxz').length != 3)
            {
                returnMessage.error = '请选中3个任选的位置'
            }
            num = count_num.org_6(detail);
            break;
        case 29:
            try{
                if(detail.split(',').length < 2)
                {
                    returnMessage.error = '组二至少要选中2个球'
                }
            } catch (e) {
                returnMessage.error = '组二至少要选中2个球'
            }
            if($(config.bet).find('.choose_ball_box_allow .ballxz').length != 2)
            {
                returnMessage.error = '请选中2个任选的位置'
            }
            num = count_num.org_2(detail);
            break;
        case 342:
        case 423:
            try{
                if(detail.split(',').length < 2)
                {
                    returnMessage.error = '组二至少要选中2个球'
                }
            } catch (e) {
                returnMessage.error = '组二至少要选中2个球'
            }
            if($(config.bet).find('.choose_ball_box_allow .ballxz').length != 2)
            {
                returnMessage.error = '请选中2个任选的位置'
            }
            num = count_num.org_2(detail);
            num = num / 2;
            break;
        case 61:
        case 62:
        case 63:
        case 286:
            $(detail.substring(1,detail.length-1).split('#')).each(function(i,v){
                if(v.length != 3)
                {
                    returnMessage.error =  v + '有问题.请修正.只允许输入3位数字';
                }
            })
            detail = count_num.unique(detail);
            num = count_num.single(detail)
            break;
        case 64:
        case 65:
            $(detail.substring(1,detail.length-1).split('#')).each(function(i,v){
                if(v.length != 2)
                {
                    returnMessage.error =  v + '有问题.请修正.只允许输入2位数字';
                }
            })
            detail = count_num.unique(detail);
            num = count_num.single(detail)
            break;
        case 66:
            $(detail.substring(1,detail.length-1).split('#')).each(function(i,v){
                if(v.length != 5)
                {
                    returnMessage.error =  v + '有问题.请修正.只允许输入5位数字';
                }
            })
            detail = count_num.unique(detail);
            num = count_num.single(detail)
            break;
        case 67:
        case 68:
            $(detail.substring(1,detail.length-1).split('#')).each(function(i,v){
                if(v.length != 4)
                {
                    returnMessage.error =  v + '有问题.请修正.只允许输入4位数字';
                }
            })
            detail = count_num.unique(detail);
            num = count_num.single(detail)
            break;
        //任三单式
        case 69:
            var len = $(config.bet).find('.choose_ball_box_allow .ballxz').length;
            if(len < 3)
            {
                returnMessage.error = '请至少选中3个任选的位置'
            }

            $(detail.substring(1,detail.length-1).split('#')).each(function(i,v){
                if(v.length != 3)
                {
                    returnMessage.error =  v + '有问题.请修正.只允许输入3位数字';
                }
            })
            switch(len)
            {
                case 5:
                    num = 10 * detail.substring(1,detail.length-1).split('#').length
                    break;
                case 4:
                    num = 4 * detail.substring(1,detail.length-1).split('#').length
                    break;
                case 3:
                    num = detail.substring(1,detail.length-1).split('#').length
                    break;
            }
            break;
        case 339:
        case 421:
            if($(config.bet).find('.choose_ball_box_allow .ballxz').length != 3)
            {
                returnMessage.error = '请选中3个任选的位置'
            }
            detail = count_num.unique(detail);
            num = count_num.single(detail)
            break;
        //任二单式
        case 70:
            var len = $(config.bet).find('.choose_ball_box_allow .ballxz').length;
            if(len < 2)
            {
                returnMessage.error = '请至少选中2个任选的位置'
            }

            $(detail.substring(1,detail.length-1).split('#')).each(function(i,v){
                if(v.length != 2)
                {
                    returnMessage.error =  v + '有问题.请修正.只允许输入2位数字';
                }
            })
            switch(len)
            {
                case 5:
                    num = 10 * detail.substring(1,detail.length-1).split('#').length
                    break;
                case 4:
                    num = 6 * detail.substring(1,detail.length-1).split('#').length
                    break;
                case 3:
                    num = 3 * detail.substring(1,detail.length-1).split('#').length
                    break;
                case 2:
                    num = detail.substring(1,detail.length-1).split('#').length
                    break;
            }
            break;
        case 284:
            $(detail.substring(1,detail.length-1).split('#')).each(function(i,v){
                console.log(v)
                if(v.length != 2)
                {
                    returnMessage.error =  v + '有问题.请修正.只允许输入2位数字';
                }
            })
        case 341:
            if($(config.bet).find('.choose_ball_box_allow .ballxz').length != 2)
            {
                returnMessage.error = '请选中2个任选的位置'
            }
            detail = count_num.unique(detail);
            num = count_num.single(detail)
            break;
        case 283:
            if(result.length != 2)
            {
                returnMessage.error = '二星复式只允许选中2个位置的球'
            } else {
                var len = detail.length
                var new_detail = '';
                num = count_num.mul(detail);
            }
            break;
        case 289:
            num = 0;
            $(detail.substr(1,detail.length-2).split('#')).each(function(i,v){
                if(v.length != 3)
                {
                    returnMessage.error =  v + '有问题.请修正.只允许输入3位数字';
                }
                var temp = v.split('')
                if(temp[0] != temp[1] && temp[0] != temp[2] && temp[1] != temp[2] )
                {
                    num += 6;
                } else if((temp[0] != temp[1] && temp[1] == temp[2]) || (temp[1] != temp[2] && temp[0] == temp[2]) || (temp[0] != temp[2] && temp[1] == temp[0])) {
                    num += 3;
                } else {
                    num += 1;
                }
            })
            break;
        case 398:
        case 386:
        case 392:
            num = 0;
            var newDetail = {};
            //号码过滤
            $(detail.substr(1,detail.length-2).split('#')).each(function(i,v){
                newDetail[v.match(/\d/g).sort()] = v;

            })
            detail = '{';
            for(var i in newDetail)
            {
                detail += newDetail[i]+'#'
                if(newDetail[i].length != 3)
                {
                    returnMessage.error =  newDetail[i] + '有问题.请修正.只允许输入3位数字';
                }
                var temp = newDetail[i].split('')
                if(temp[0] == temp[1] && temp[1] == temp[2]  )
                {
                    returnMessage.error =  newDetail[i] + '有问题.请修正.请勿输入3位一样的数字';
                }
                num++;
            }
            detail = detail.substr(0,detail.length-1)+'}';
            break;
        case 382:
            if($(config.bet).find('.choose_ball_box_allow .ballxz').length != 3)
            {
                returnMessage.error = '请选中3个任选的位置'
            }
        //detail = detail.substr(0,detail.length - 1);
        case 322:
        case 364:
        case 365:
        case 366:
            if(result.length < 1)
            {
                returnMessage.error = '和值必须选中1个位置的球';
            } else {
                var arr = [1,3,6,10,15,21,28,36,45,55,63,69,73,75,75,73,69,63,55,45,36,28,21,15,10,6,3,1];
                num = 0;
                $(detail.substr(1,detail.length - 2).split('-')).each(function(i,v){
                    num += arr[v]
                })
            }
            break;
        //任选一
        case 323:
            if(result.length < 1)
            {
                returnMessage.error = '任选一必须选中1个球';
            } else {
                num = detail.split('-').length
            }
            break;
        case 324:
        case 412:
            if(detail.split('-').length < 2)
            {
                returnMessage.error = '任选二必须选中2个球';
            }
            num = count_num.mul_allow_2(detail);
            break;
        case 325:
        case 413:
            if(detail.split('-').length < 3)
            {
                returnMessage.error = '任选三必须选中3个球';
            }
            num = count_num.mul_allow_3(detail);
            break;
        case 326:
        case 414:
            if(detail.split('-').length < 4)
            {
                returnMessage.error = '任选四必须选中4个球';
            }
            num = count_num.mul_allow_4(detail);
            break;
        case 327:
        case 415:
            if(detail.split('-').length < 5)
            {
                returnMessage.error = '任选五必须选中5个球';
            }
            num = count_num.mul_allow_5(detail);
            break;
        case 328:
        case 416:
            if(detail.split('-').length < 6)
            {
                returnMessage.error = '任选六必须选中6个球';
            }
            num = count_num.mul_allow_6(detail);
            break;

        case 329:
        case 417:
            if(detail.split('-').length < 7)
            {
                returnMessage.error = '任选七必须选中7个球';
            }
            num = count_num.mul_allow_7(detail);
            break;
        case 330:
        case 418:
            if(detail.split('-').length < 8)
            {
                returnMessage.error = '任选八必须选中8个球';
            }
            num = count_num.mul_allow_8(detail);
            break;
        case 344:
            if(detail.split('-').length < 1)
            {
                returnMessage.error = '猜中位必须选中一个号码';
            }
            num = detail.split('-').length;
            break;
        case 345:
            if(detail.split('-').length < 1)
            {
                returnMessage.error = '定单双必须选中一个号码';
            }
            num = detail.split('-').length;
            break;
        case 346:
            if(detail.split('-').length < 5)
            {
                returnMessage.error = '必须选中五个号码';
            }
            var arr = detail.match(/(\d+)/g)
            var numLen = arr.length
            num = count_num.groupSelection(numLen,5);
            break;
        case 347:
            var temp = detail.split(',');
            if(temp[0].split('-').length < 1)
            {
                returnMessage.error = '二重号必须选中1个号码';
            }
            if(temp[1].split('-').length < 3)
            {
                returnMessage.error = '单号必须选中3个号码';
            }
            num = count_num.groupSelectionMore(detail,3,1);
            break;
        //组选30
        case 348:
            var temp = detail.substr(1,detail.length-2).split(',');
            returnMessage.error = lengthError(temp[0],2);
            returnMessage.error = lengthError(temp[1],1);
            num = count_num.groupSelectionMore(detail,1,2);
            break;
        case 349:
            var temp = detail.split(',');
            if(temp[0].split('-').length < 1)
            {
                returnMessage.error = '三重号必须选中1个号码';
            }
            if(temp[1].split('-').length < 2)
            {
                returnMessage.error = '单号必须选中2个号码';
            }
            num = count_num.groupSelectionMore(detail,2,1);
            break;
        case 350:
            var temp = detail.split(',');
            returnMessage.error = lengthError(temp[0],1);
            returnMessage.error = lengthError(temp[1],1);
            num = count_num.groupSelectionMore(detail,1,1);
            break;
        case 351:
            var temp = detail.split(',');
            returnMessage.error = lengthError(temp[0],1);
            returnMessage.error = lengthError(temp[1],1);
            num = count_num.groupSelectionMore(detail,1,1);
            break;
        case 357:
        case 361:
            var temp = detail.split(',');
            if(temp[0].split('-').length < 1)
            {
                returnMessage.error = '二重号必须选中1个号码';
            }
            if(temp[1].split('-').length < 2)
            {
                returnMessage.error = '单号必须选中2个号码';
            }
            num = count_num.groupSelectionMore(detail,2,1);
            break;
        case 359:
        case 363:
            var temp = detail.split(',');
            returnMessage.error = lengthError(temp[0],1);
            returnMessage.error = lengthError(temp[1],1);
            num = count_num.groupSelectionMore(detail,1,1);
            break;


        case 356:
        case 360:
            if(detail.split('-').length < 4)
            {
                returnMessage.error = '必须选中四个号码';
            }
            var arr = detail.match(/(\d+)/g)
            var numLen = arr.length
            num = count_num.groupSelection(numLen,4);
            break;
        case 358:
        case 362:
            if(detail.split('-').length < 2)
            {
                returnMessage.error = '必须选中二个号码';
            }
            var arr = detail.match(/(\d+)/g)
            var numLen = arr.length
            num = count_num.groupSelection(numLen,2);
            break;
        case 381:
            if($(config.bet).find('.choose_ball_box_allow .ballxz').length != 2)
            {
                returnMessage.error = '请选中2个任选的位置'
            }
        //detail = detail.substr(0,detail.length - 1);
        case 367:
        case 368:
            if(result.length < 1)
            {
                returnMessage.error = '和值必须选中1个位置的球';
            } else {
                var arr = [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1];
                num = 0;
                $(detail.substr(1,detail.length - 2).split('-')).each(function(i,v){
                    num += arr[v]
                })
            }
            break;
        case 369:
        case 372:
        case 374:
        case 375:
        case 376:
            if(detail.split('-').length < 2)
            {
                returnMessage.error = '必须选中2个号码';
            }
            var arr = detail.match(/(\d+)/g)
            var numLen = arr.length
            num = count_num.groupSelection(numLen,2);
            break;
        case 370:
            if(detail.split('-').length < 3)
            {
                returnMessage.error = '必须选中3个号码';
            }
            var arr = detail.match(/(\d+)/g)
            var numLen = arr.length
            num = count_num.groupSelection(numLen,3);
            break;
        //直选跨度
        case 383:
        case 391:
        case 397:
            if(result.length < 1)
            {
                returnMessage.error = '号码选择不完整，请重新选择';
            } else {
                num = count_num.span(detail,3);
            }

            break;
        case 403:
        case 406:
            if(result.length < 1)
            {
                returnMessage.error = '号码选择不完整，请重新选择';
            } else {
                num = count_num.span(detail,2);
            }
            break;
        //组选和值
        case 387:
        case 393:
        case 399:
            if(result.length < 1)
            {
                returnMessage.error = '号码选择不完整，请重新选择';
            } else {
                num = count_num.groupSum(detail);
            }
            break;
        //组选包胆
        case 388:
        case 394:
        case 400:
            if(result.length < 1)
            {
                returnMessage.error = '号码选择不完整，请重新选择';
            } else {
                var arr = detail.split('-')
                num = arr.length * 54;
            }
            break;
        case 390:
        case 396:
        case 402:
            if(result.length < 1)
            {
                returnMessage.error = '号码选择不完整，请重新选择';
            } else {
                var arr = detail.split('-')
                num = arr.length;
            }
            break;
        case 404:
        case 407:
            if(result.length < 1)
            {
                returnMessage.error = '号码选择不完整，请重新选择';
            } else {
                num = count_num.groupSum_2(detail);
            }
            break;
        case 405:
        case 408:
            if(result.length < 1)
            {
                returnMessage.error = '号码选择不完整，请重新选择';
            } else {
                var arr = detail.split('-')
                num = arr.length * 9;
            }
            break;
        case 424:
            if(result.length < 1)
            {
                returnMessage.error = '必须选中1个位置的球'
            } else {
                //计算注数
                num = count_num.position(detail)
            }
            break;
        case 429:
        case 430:
        case 431:
        case 432:
        case 433:
        case 434:
            if(result.length < 1)
            {
                returnMessage.error = '必须选中1个位置的球'
            } else {
                //计算注数
                num = detail.match(/[大|小|单|双]+/g).length
            }
            break;
        case 425:
            if(result.length != 2)
            {
                returnMessage.error = '复式必选选择2个位置'
            } else {
                num = count_num.shiyi_mul_2(detail.replace(/,,/g,','));
            }
            break;
        case 427:
            if(result.length != 3)
            {
                returnMessage.error = '复式必选选择3个位置'
            } else {
                num = count_num.shiyi_mul(detail.replace(/,,/g,','));
            }
            break;
        case 426:
        case 428:
            detail = count_num.unique(detail);
            num = count_num.single(detail)
            break;
    }
    if(num == 0)
    {
        returnMessage.error = '号码选择不完整，请重新选择';
    }
    returnMessage.num = num;
    returnMessage.detail = detail;
    //更新中奖奖金
    return returnMessage
}

//选号投注状态



