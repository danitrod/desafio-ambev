import numpy as np

# Por Gabriel Pinheiro e Daniel Rodrigues

def main(dict):
    idh = dict['idh']
    m2r = dict['m2r']
    pg = dict['pg']
    caixas = dict['caixas']
    
    vprodutos = ['Budweiser 350ml', 'Budweiser 473ml', 'Budweiser 600ml', 'Brahma Refresh 1L', 'Brahma 0% 350ml',
                'Skol Pilsen 1L', 'Corona 355ml', 'Stella Artois 550ml', 'Baré 2L', 'Pepsi 2L', 'Soda 350ml',
                'Soda 2L', 'Sukita 1.5L', 'Fusion 250ml', 'Fusion 2L', 'Colorado Appia', 'Colorado Berthô']
    matriza = np.array([[0.896,5349.1,1],[0.909,7403.33,2],[0.953,12305.17,3]])
    matrizBud350 = np.array([0.08163265306,0.1568627451,0.1851851852])
    matrizBud473 = np.array([0.0612244898,0.1176470588,0.1481481481])
    matrizBud600 = np.array([0.04081632653,0.07843137255,0.1111111111])
    matrizBrahmaRefresh = np.array([0.08163265306,0.03921568627,0.03703703704])
    matrizBrahma0 = np.array([0.08163265306,0.05882352941,0.03703703704])
    matrizSkolPilsen = np.array([0.2040816327,0.07843137255,0.01851851852])
    matrizCorona = np.array([0.02040816327,0.05882352941,0.1111111111])
    matrizStella = np.array([0.02040816327,0.05882352941,0.1111111111])
    matrizBare = np.array([0.08163265306,0.03921568627,0.])
    matrizPepsi = np.array([0.08163265306,0.07843137255,0.03703703704])
    matrizSoda350 = np.array([0.08163265306,0.07843137255,0.03703703704])
    matrizSoda2L = np.array([0.04081632653,0.03921568627,0.01851851852])
    matrizSukita = np.array([0.04081632653,0.01960784314,0.])
    matrizFusion250 = np.array([0.02040816327,0.01960784314,0.])
    matrizFusion2L = np.array([0.02040816327,0.,0.])
    matrizColoradoAppia = np.array([0.02040816327,0.03921568627,0.07407407407])
    matrizColoradoBertho = np.array([0.02040816327,0.03921568627,0.07407407407])
    vsol=[]
    
    vsol.append(np.linalg.solve(matriza, matrizBud350))
    vsol.append(np.linalg.solve(matriza, matrizBud473))
    vsol.append(np.linalg.solve(matriza, matrizBud600))
    vsol.append(np.linalg.solve(matriza, matrizBrahmaRefresh))
    vsol.append(np.linalg.solve(matriza, matrizBrahma0))
    vsol.append(np.linalg.solve(matriza, matrizSkolPilsen))
    vsol.append(np.linalg.solve(matriza, matrizCorona))
    vsol.append(np.linalg.solve(matriza, matrizStella))
    vsol.append(np.linalg.solve(matriza, matrizBare))
    vsol.append(np.linalg.solve(matriza, matrizPepsi))
    vsol.append(np.linalg.solve(matriza, matrizSoda350))
    vsol.append(np.linalg.solve(matriza, matrizSoda2L))
    vsol.append(np.linalg.solve(matriza, matrizSukita))
    vsol.append(np.linalg.solve(matriza, matrizFusion250))
    vsol.append(np.linalg.solve(matriza, matrizFusion2L))
    vsol.append(np.linalg.solve(matriza, matrizColoradoAppia))
    vsol.append(np.linalg.solve(matriza, matrizColoradoBertho))
    vsol.append(np.linalg.solve(matriza, matrizSoda2L))
    
    estoqueBud350 = 0
    estoqueBud473 = 0
    estoqueBud600 = 0
    estoqueBrahmaRefresh = 0
    estoqueBrahma0 = 0
    estoqueSkolPilsen = 0
    estoqueCorona = 0
    estoqueStella = 0
    estoqueBare = 0
    estoquePepsi = 0
    estoqueSoda350 = 0
    estoqueSoda2L = 0
    estoqueSukita = 0
    estoqueFusion250 = 0
    estoqueFusion2L = 0
    estoqueColoradoAppia = 0
    estoqueColoradoBertho = 0
    
    for i in range(len(dict['stock'])):
        print(dict['stock'][i]['name'])
        if dict['stock'][i]['name'] == 'Budweiser 350ml':
            estoqueBud350 = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Budweiser 473ml':
            estoqueBud473 = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Budweiser 600ml':
            estoqueBud600 = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Brahma Refresh 1L':
            estoqueBrahmaRefresh = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Brahma 0% 350ml':
            estoqueBrahma0 = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Skol Pilsen 1L':
            estoqueSkolPilsen = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Corona 355ml':
            estoqueCorona = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Stella Artois 550ml':
            estoqueStella = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Baré 2L':
            estoqueBare = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Pepsi 2L':
            estoquePepsi = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Soda 350ml':
            estoqueSoda350 = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Soda 2L':
            estoqueSoda2L = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Sukita  1.5L':
            estoqueSukita = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Fusion 250ml':
            estoqueFusion250 = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Fusion 2L':
            estoqueFusion2L = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Colorado Appia':
            estoqueColoradoAppia = dict['stock'][i]['quantity']
        if dict['stock'][i]['name'] == 'Colorado Berthô':
            estoqueColoradoBertho = dict['stock'][i]['quantity']
    
    estoquet = estoqueBare+estoqueBrahma0+estoqueBrahmaRefresh+estoqueBud350+estoqueBud473+estoqueBud600
    +estoqueColoradoAppia+estoqueColoradoBertho+estoqueCorona+estoqueFusion2L+estoqueFusion250+estoquePepsi
    +estoqueSkolPilsen+estoqueSukita+estoqueSoda350+estoqueSoda2L+estoqueStella
    
    vestoque= [estoqueBud350,estoqueBud473,estoqueBud600,estoqueBrahmaRefresh,estoqueBrahma0,estoqueSkolPilsen,
               estoqueCorona,estoqueStella,estoqueBare,estoquePepsi,estoqueSoda350,estoqueSoda2L,estoqueSukita,
               estoqueFusion250,estoqueFusion2L,estoqueColoradoAppia,estoqueColoradoBertho]
    vdif = []
    vP = []
    soma = 0
    
    if(caixas<=estoquet):
        for i in range(17):
            vP.append((vsol[i][0]*idh)+(vsol[i][1]*m2r)+(vsol[i][2]*pg))
    
        for i in range(17):
            soma = soma + vP[i]
        for i in range(17):
            vP[i] = vP[i]/soma
        if vP[0]<0:
            for i in range(17):
                if i != 0:
                    vP[i] = vP[i] + (vP[0]/18)
            vP[0] = 0.
        if vP[1]<0:
            for i in range(17):
                if i != 1:
                    vP[i] = vP[i] + (vP[1]/18)
            vP[1] = 0.
        if vP[2]<0:
            for i in range(17):
                if i != 2:
                    vP[i] = vP[i] + (vP[2]/18)
            vP[2] = 0.
        if vP[3]<0:
            for i in range(17):
                if i != 3:
                    vP[i] = vP[i] + (vP[3]/18)
            vP[3] = 0.
        if vP[4]<0:
            for i in range(17):
                if i != 4:
                    vP[i] = vP[i] + (vP[4]/18)
            vP[4] = 0.
        if vP[5]<0:
            for i in range(17):
                if i != 5:
                    vP[i] = vP[i] + (vP[5]/18)
            vP[5] = 0.
        if vP[6]<0:
            for i in range(17):
                if i != 6:
                    vP[i] = vP[i] + (vP[6]/18)
            vP[6] = 0.
        if vP[7]<0:
            for i in range(17):
                if i != 7:
                    vP[i] = vP[i] + (vP[7]/18)
            vP[7] = 0.
        if vP[8]<0:
            for i in range(17):
                if i != 8:
                    vP[i] = vP[i] + (vP[8]/18)
            vP[8] = 0.
        if vP[9]<0:
            for i in range(17):
                if i != 9:
                    vP[i] = vP[i] + (vP[9]/18)
            vP[9] = 0.
        if vP[10]<0:
            for i in range(17):
                if i != 10:
                    vP[i] = vP[i] + (vP[10]/18)
            vP[10] = 0.
        if vP[11]<0:
            for i in range(17):
                if i != 11:
                    vP[i] = vP[i] + (vP[11]/18)
            vP[11] = 0.
        if vP[12]<0:
            for i in range(17):
                if i != 12:
                    vP[i] = vP[i] + (vP[12]/18)
            vP[12] = 0.
        if vP[13]<0:
            for i in range(17):
                if i != 13:
                    vP[i] = vP[i] + (vP[13]/18)
            vP[13] = 0.
        if vP[14]<0:
            for i in range(17):
                if i != 14:
                    vP[i] = vP[i] + (vP[14]/18)
            vP[14] = 0.
        if vP[15]<0:
            for i in range(17):
                if i != 15:
                    vP[i] = vP[i] + (vP[15]/18)
            vP[15] = 0.
        if vP[16]<0:
            for i in range(17):
                if i != 16:
                    vP[i] = vP[i] + (vP[16]/18)
            vP[16] = 0.
    
        vcaixas=[]
        soma=0
        max=0
        for i in range(17):
            vcaixas.append(caixas*vP[i])
            vcaixas[i] = round(vcaixas[i])
        for i in range(17):
            soma = soma + vcaixas[i]
    
        if soma>caixas:
            for i in range(17):
                if vcaixas[i]>max:
                    max = vcaixas[i]
                    cont = i
            vcaixas[cont] = vcaixas[cont] - 1
        if soma<caixas:
            for i in range(17):
                if vcaixas[i]>max:
                    max = vcaixas[i]
                    cont = i
            vcaixas[cont] = vcaixas[cont] + 1
        soman=0
        for i in range(17):
            vdif.append(vestoque[i] - vcaixas[i])
            if vdif[i]<0:
                soman = soman + vdif[i]
                vdif[i] = 0
                vcaixas[i] = vestoque[i]
        print(vestoque[15])
        if soman!=0:
            somap = 0
            vPp = []
            vc = []
            for i in range(17):
                somap = somap + vdif[i]
            for i in range(17):
                vPp.append(vdif[i]/somap)
            for i in range(17):
                vc.append(vPp[i]*abs(soman))
                vcaixas[i] = vcaixas[i] + vc[i]
            for i in range(17):
                vcaixas[i] = round(vcaixas[i])
            soma = 0
            for i in range(17):
                soma = soma + vcaixas[i]
            if soma > caixas:
                for i in range(17):
                    if vcaixas[i] > max:
                        max = vcaixas[i]
                        cont = i
                vcaixas[cont] = vcaixas[cont] - 1
            if soma < caixas:
                for i in range(17):
                    if vcaixas[i] > max:
                        max = vcaixas[i]
                        cont = i
                vcaixas[cont] = vcaixas[cont] + 1
    
        for i in range(17):
            if vcaixas[i] <= 0:
                vcaixas[i] = 0
    
        soma=0
        for i in range(17):
            soma = soma + vcaixas[i]
    
        max = 0
        if soma>caixas:
            dif = soma - caixas
            for i in range(17):
                if vcaixas[i]>max:
                    max = vcaixas[i]
                    num = i
            vcaixas[i] = vcaixas[i] - dif
        if soma < caixas:
            dif = caixas - soma
            for i in range(17):
                if vcaixas[i] > max:
                    max = vcaixas[i]
                    num = i
            vcaixas[i] = vcaixas[i] + dif
    
        soma = 0
        res = { "err": False, "mix": {} }
        for i in range(17):
            res['mix'][vprodutos[i]] = vcaixas[i]
        return res
    else:
        return {
            "err": True,
            "msg": "Caixas solicitadas são mais do que presentes no estoque."
        }