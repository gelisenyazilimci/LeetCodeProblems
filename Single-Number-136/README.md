# SingleNumber Fonksiyon Dokümantasyonu

Bu `SingleNumber` fonksiyonu, her sayının tam olarak iki kez göründüğü bir dizide yalnızca bir kez görünen sayıyı bulmak için tasarlanmıştır. Uygulama, her bir elemanı diğer tüm elemanlarla karşılaştırmak için bir **iç içe döngü** kullanır ve bu, O(n²) zaman karmaşıklığı ve O(1) uzay karmaşıklığı ile sonuçlanır.

## Fonksiyon Açıklaması

```csharp
static int SingleNumber(int[] nums)
{
    if (nums.Length == 1)
    {
        return nums[0]; // Dizide yalnızca bir eleman varsa direkt sonucu döndür
    }

    for (int i = 0; i < nums.Length; i++)
    {
        bool isUnique = true; // Mevcut elemanın benzersiz olduğunu varsay

        for (int j = 0; j < nums.Length; j++)
        {
            if (!i.Equals(j) && nums[i].Equals(nums[j]))
            {
                isUnique = false; // Eğer bir eşleşme bulunursa, eleman benzersiz değildir
                break; // İç döngüden erken çık
            }
        }

        if (isUnique)
        {
            return nums[i]; // Benzersiz eleman bulunursa döndür
        }
    }

    return 0; // Varsayılan dönüş değeri (giriş kısıtlamaları sağlanırsa bu asla ulaşılmaz).
}
```

## Karmaşıklık Analizi

### **Zaman Karmaşıklığı: O(n²)**
- **Dış döngü:** `for` döngüsü dizideki tüm `n` eleman üzerinde döner.
- **İç döngü:** Her `nums[i]` elemanı için iç döngü, tüm `n` eleman üzerinde (kendisi hariç) döner.
- Birlikte, bu **O(n × n) = O(n²)** ile sonuçlanır.

### **Uzay Karmaşıklığı: O(1)**
- Algoritma, dizi, hashmap veya liste gibi ek veri yapıları kullanmaz.
- Sadece birkaç değişken (`isUnique`, `i`, `j`) kullanılır, bu da **sabit uzay karmaşıklığı** ile sonuçlanır.

## Örnek Kullanım

### Örnek 1:
```csharp
int[] nums1 = { 2, 2, 1 };
Console.WriteLine(SingleNumber(nums1)); // Çıktı: 1
```

### Örnek 2:
```csharp
int[] nums2 = { 4, 1, 2, 1, 2 };
Console.WriteLine(SingleNumber(nums2)); // Çıktı: 4
```

### Örnek 3:
```csharp
int[] nums3 = { 1 };
Console.WriteLine(SingleNumber(nums3)); // Çıktı: 1
```

## Ana Noktalar
- Algoritma, özellikle basitliği ön planda tutmak ve daha fazla optimize edilmemesi gerektiği talebine uygun olarak **O(n²)** zaman karmaşıklığıyla uygulanmıştır.
- Her elemanın diğer tüm elemanlarla karşılaştırılması sayesinde benzersiz sayı bulunur.
- Küçük giriş boyutları için uygundur, çünkü zaman karmaşıklığı kare şeklindedir.

### Küçük Bir Not: 
- Daha büyük veri setleri için, bu çözümü bir hash set (O(n)) veya bit düzeyinde XOR (O(n)) yaklaşımıyla optimize etmeyi düşünün.
